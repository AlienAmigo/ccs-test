import React from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import HelpNavList from 'components/MainNav/data/help';
import Wrapper from './style';

interface Props {
  togglePhoneMenu: () => void;
}
const HelpNav: React.FC<Props> = ({ togglePhoneMenu }) => {
  return (
    <Wrapper>
      <ul className="help-nav__list">
        {HelpNavList.map(item => (
          <li key={nanoid()} className="help-nav__item">
            <NavLink
              onClick={togglePhoneMenu}
              end
              to={`${item.path}`}
              className={({ isActive }) =>
                `help-nav__link${isActive ? ' active' : ''}`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default HelpNav;
