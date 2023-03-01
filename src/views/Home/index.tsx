import React from 'react';
import Gallery from './components/Gallery';
import Categories from './components/Categories';
import Inventory from './components/Inventory';
import Features from './components/Features';
import Wrapper from './style';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <h1 hidden>Main Page</h1>
      <Gallery />
      <Categories />
      <Inventory />
      <Features />
    </Wrapper>
  );
};

export default Home;
