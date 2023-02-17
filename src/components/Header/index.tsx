import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PATH from 'routes/path';
import MainNav from 'components/MainNav';
import PhoneLink from 'components/PhoneLink';
import BurgerMenuButton from './components/BurgerMenuButton';
import SearchField from './components/SearchField';
import LogoImg from './assets/Logo.svg';
import Wrapper from './style';

const Header: React.FC = () => {
  const [phoneMenu, setPhoneMenu] = useState(false);

  const togglePhoneMenu = () => {
    setPhoneMenu(!phoneMenu);
  };

  return (
    <Wrapper>
      <div className="header__wrapper">
        <NavLink
          end
          to={PATH.BASE}
          className={({ isActive }) =>
            `header__logo${isActive ? ' active' : ''}`
          }
        >
          <img className="header__logo-img" alt="Логотип" src={LogoImg} />
        </NavLink>

        <SearchField />

        <div className="header__main-nav-wrapper">
          <MainNav phoneMenu={phoneMenu} togglePhoneMenu={togglePhoneMenu} />
          <PhoneLink className="header__phone-link" />
          <BurgerMenuButton
            onClick={() => {
              togglePhoneMenu();
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
