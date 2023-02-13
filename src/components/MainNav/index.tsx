import React from 'react';
import BasicNav from './components/BasicNav';
import HelpNav from './components/HelpNav';
import ClientNav from './components/ClientNav';
import Wrapper from './style';

const MainNav: React.FC = () => {
  return (
    <Wrapper>
      <BasicNav />
      <HelpNav />
      <ClientNav cartItems={32} />
    </Wrapper>
  );
};

export default MainNav;
