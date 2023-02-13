import React from 'react';
import Wrapper from './style';

const Inventory = () => {
  return (
    <Wrapper>
      <h3 className="inventory__title">
        Large Inventory Of Power Tools & Accessories
      </h3>
      <p className="inventory__text">
        Find the Aluminum and Stainless Steel items for your project in stock
        and ready to ship today! Avoid project delays and long lead times in a
        challenging supply chain for specialty metals and non-ferrous items. We
        are well stocked and here to serve you with guided support.
      </p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="inventory__btn">
        Shop Now
      </a>
    </Wrapper>
  );
};

export default Inventory;
