import React from 'react';
import ReactPaginate from 'react-paginate';

import CountryCard from '../CountryCard';
import Loading from '../Loading';

import {
  Container,
  CountriesWrapper,
  EllipsisIcon,
  NextIcon,
  PreviousIcon,
} from './styles';

export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const CountriesSection: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      const response = await fetch('https://restcountries.eu/rest/v2/all');

      const json = await response.json();

      setCountries(
        json.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name)
        )
      );
    })();
  }, []);

  function handlePageClick(selectedItem: { selected: number }) {
    setCurrentPage(selectedItem.selected);
  }

  if (!countries.length) {
    return <Loading />;
  }

  return (
    <Container>
      <CountriesWrapper>
        {countries.slice(currentPage * 8, (currentPage + 1) * 8).map(country => (
          <CountryCard key={country.name} country={country} />
        ))}
      </CountriesWrapper>

      <ReactPaginate
        previousLabel={<PreviousIcon />}
        nextLabel={<NextIcon />}
        breakLabel={<EllipsisIcon />}
        pageCount={countries.length / 8}
        breakClassName={'break-me'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Container>
  );
};

export default CountriesSection;
