import React from 'react';
import BasicNavList from 'components/MainNav/data/basic';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import Wrapper from './style';

const BasicNav: React.FC = () => {
  return (
    <Wrapper>
      <ul className="basic-nav__list">
        {BasicNavList.map(item => (
          <li key={nanoid()} className="basic-nav__item">
            <NavLink
              end
              to={item.path}
              className={({ isActive }) =>
                `basic-nav__link${isActive ? ' active' : ''}`
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

export default BasicNav;
