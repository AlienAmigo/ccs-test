import React from 'react';
import SearchField from 'components/Header/components/SearchField';
import * as events from 'events';
import BasicNav from './components/BasicNav';
import HelpNav from './components/HelpNav';
import ClientNav from './components/ClientNav';
import Wrapper from './style';

interface Props {
  phoneMenu: boolean;
  togglePhoneMenu: () => void;
}

const menuClick = (ev: React.SyntheticEvent, phoneMenu: boolean) => {
  if (phoneMenu) {
    ev.stopPropagation();
    ev.nativeEvent.stopImmediatePropagation();
  }
};

const MainNav: React.FC<Props> = ({ phoneMenu, togglePhoneMenu }) => {
  return (
    <Wrapper phoneMenu={phoneMenu}>
      <div
        role="presentation"
        className="main-nav__wrapper"
        onClick={togglePhoneMenu}
      >
        <div
          className="main-nav__menu"
          role="presentation"
          onClick={ev => {
            ev.nativeEvent.stopImmediatePropagation();
            ev.stopPropagation();
          }}
        >
          <SearchField phoneMenu togglePhoneMenu={togglePhoneMenu} />
          <BasicNav togglePhoneMenu={togglePhoneMenu} />
          <HelpNav togglePhoneMenu={togglePhoneMenu} />
        </div>
      </div>
      <ClientNav cartItems={32} />
    </Wrapper>
  );
};

export default MainNav;
