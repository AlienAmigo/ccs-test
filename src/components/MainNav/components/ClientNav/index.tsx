import React from 'react';
import PATH from 'routes/path';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import ClientNavList from 'components/MainNav/data/client';
import { ReactComponent as AccountImg } from './assets/account.svg';
import { ReactComponent as CartImg } from './assets/cart.svg';
import { ReactComponent as ListsImg } from './assets/lists.svg';
import { ReactComponent as QuickOrderImg } from './assets/quick-order.svg';
import Wrapper from './style';

const setIcon = (path: string, modificator?: string) => {
  const setIconClass = (mod?: string): string =>
    `client-nav__icon${mod ? ` client-nav__icon--${mod}` : ''}`;

  switch (path) {
    case PATH.ACCOUNT:
      return <AccountImg className={setIconClass(modificator)} />;
    case PATH.LISTS:
      return <ListsImg className={setIconClass(modificator)} />;
    case PATH.QUICK_ORDER:
      return <QuickOrderImg className={setIconClass(modificator)} />;
    default:
      return <CartImg className={setIconClass(modificator)} />;
  }
};

const setClassModificator = (str: string): string =>
  str.toLowerCase().replace(/[\s_]/gi, '-').replace(/\//gi, '');

interface Props {
  cartItems?: number;
}

const ClientNav: React.FC<Props> = ({ cartItems }) => {
  return (
    <Wrapper>
      <ul className="client-nav__list">
        {ClientNavList.map(item => (
          <li
            key={nanoid()}
            className="client-nav__item client-nav__item--lists"
          >
            <NavLink
              end
              to={item.path}
              className={({ isActive }) =>
                `client-nav__link client-nav__link--${setClassModificator(
                  item.title
                )} ${isActive ? ' active' : ''}`
              }
            >
              {setIcon(item.path, setClassModificator(item.title))}
              {item.path === `${PATH.CART}` && (
                <span className="client-nav__cart-counter">{cartItems}</span>
              )}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

ClientNav.defaultProps = {
  cartItems: 0
};
export default ClientNav;
