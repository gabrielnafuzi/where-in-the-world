import React from 'react';
import SearchSection from '../../components/SearchSection';
import CountriesSection from '../../components/CountriesSection';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <SearchSection />
      <CountriesSection />
    </Container>
  );
};

export default Home;
