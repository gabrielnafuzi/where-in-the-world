import React from 'react';

import { Country } from '../CountriesSection';

import { Container, CardWrapper, FlagBlock, CountryDetails } from './styles';

interface Props {
  country: Country;
}

const CountryCard: React.FC<Props> = ({ country }) => {
  return (
    <Container>
      <CardWrapper>
        <FlagBlock>
          <img src={country.flag} alt={country.name} />
        </FlagBlock>

        <CountryDetails>
          <h1>{country.name}</h1>

          <ul>
            <li>
              <strong>Population: </strong>
              <span>
                {country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </li>

            <li>
              <strong>Region: </strong>
              <span>{country.region}</span>
            </li>

            <li>
              <strong>Capital: </strong>
              <span>{country.capital}</span>
            </li>
          </ul>
        </CountryDetails>
      </CardWrapper>
    </Container>
  );
};

export default CountryCard;
