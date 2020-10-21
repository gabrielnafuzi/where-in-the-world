import React from 'react';

import useComponentVisible from './useComponentVisible';

import {
  Container,
  InputBlock,
  SearchIcon,
  SelectRegion,
  ArrowDown,
  CloseIcon,
} from './styles';

const SearchSection: React.FC = () => {
  const [filterMenu, setFilterMenu] = React.useState(false);
  const [filterText, setFilterText] = React.useState('Filter by Region');

  const { ref } = useComponentVisible(setFilterMenu);

  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <Container>
      <form>
        <InputBlock>
          <SearchIcon />
          <input type="text" placeholder="Search for a country..." />
        </InputBlock>
      </form>

      <SelectRegion ref={ref} className={filterMenu ? 'active' : ''}>
        {filterText !== 'Filter by Region' ? (
          <CloseIcon
            onClick={() => {
              setFilterText('Filter by Region');
              setFilterMenu(false);
            }}
          />
        ) : null}

        <button type="button" onClick={() => setFilterMenu(!filterMenu)}>
          <span>{filterText}</span>
          <ArrowDown />
        </button>

        {filterMenu && (
          <ul>
            {regions.map(region => (
              <li
                onClick={() => {
                  setFilterText(region);
                  setFilterMenu(false);
                }}
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </SelectRegion>
    </Container>
  );
};

export default SearchSection;
