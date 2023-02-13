import React from 'react';
import { NavLink } from 'react-router-dom';
import PATH from 'routes/path';
import MainNav from 'components/MainNav';
import PhoneLink from 'components/PhoneLink';
import SearchField from './components/SearchField';
import LogoImg from './assets/Logo.svg';
import Wrapper from './style';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <NavLink
        end
        to={PATH.BASE}
        className={({ isActive }) => `header__logo${isActive ? ' active' : ''}`}
      >
        <img className="header__logo-img" alt="Логотип" src={LogoImg} />
      </NavLink>
      <SearchField />
      <div className="header__main-nav-wrapper">
        <MainNav />
        <PhoneLink className="header__phone-link" />
      </div>
    </Wrapper>
  );
};

export default Header;
