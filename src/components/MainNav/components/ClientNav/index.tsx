import React from 'react';
import PATH from 'routes/path';
import { NavLink, Link } from 'react-router-dom';
import Wrapper from './style';

interface Props {
  cartItems?: number;
}

const ClientNav: React.FC<Props> = ({ cartItems }) => {
  return (
    <Wrapper>
      <ul className="client-nav__list">
        <li className="client-nav__item client-nav__item--lists">
          <NavLink
            end
            to={`${PATH.BASE}${PATH.LISTS}`}
            className="client-nav__link"
          >
            Lists
          </NavLink>
        </li>
        <li className="client-nav__item client-nav__item--account">
          <NavLink
            end
            to={`${PATH.BASE}${PATH.ACCOUNT}`}
            className="client-nav__link"
          >
            Account
          </NavLink>
        </li>
        <li className="client-nav__item client-nav__item--quick-order">
          <NavLink
            end
            to={`${PATH.BASE}${PATH.QUICK_ORDER}`}
            className="client-nav__link"
          >
            Quick Order
          </NavLink>
        </li>
        <li className="client-nav__item client-nav__item--cart">
          <span className="client-nav__cart-counter">{cartItems}</span>
          <NavLink
            to={`${PATH.BASE}${PATH.CART}`}
            end
            className="client-nav__link"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

ClientNav.defaultProps = {
  cartItems: 0
};
export default ClientNav;
