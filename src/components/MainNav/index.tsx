import React from 'react';
import SearchField from 'components/Header/components/SearchField';
import BasicNav from './components/BasicNav';
import HelpNav from './components/HelpNav';
import ClientNav from './components/ClientNav';
import Wrapper from './style';

interface Props {
  phoneMenu: boolean;
  togglePhoneMenu: () => void;
}

const MainNav: React.FC<Props> = ({ phoneMenu, togglePhoneMenu }) => {
  return (
    <Wrapper phoneMenu={phoneMenu} onClick={togglePhoneMenu}>
      <div className="main-nav__wrapper">
        <div className="main-nav__menu">
          <SearchField phoneMenu />
          <BasicNav />
          <HelpNav />
        </div>
      </div>
      <ClientNav cartItems={32} />
    </Wrapper>
  );
};

export default MainNav;
