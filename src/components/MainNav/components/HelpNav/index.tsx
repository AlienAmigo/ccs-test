import React from 'react';
import PATH from 'routes/path';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import HelpNavList from 'components/MainNav/data/help';
import Wrapper from './style';

const HelpNav: React.FC = () => {
  return (
    <Wrapper>
      <ul className="help-nav__list">
        {HelpNavList.map(item => (
          <li key={nanoid()} className="help-nav__item">
            <NavLink
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
