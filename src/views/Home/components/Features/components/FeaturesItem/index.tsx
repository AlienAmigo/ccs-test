import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ProductsImg } from '../../assets/products.svg';
import { ReactComponent as SupportImg } from '../../assets/support.svg';
import { ReactComponent as IdeasImg } from '../../assets/ideas.svg';

import Wrapper from './style';

interface Props {
  title: string;
  path: string;
}

const setFeatureIcon = (name: string) => {
  switch (name) {
    case `Products Catalog`:
      return <ProductsImg />;
    case `24/7 Customer Support`:
      return <SupportImg />;
    default:
      return <IdeasImg />;
  }
};
const FeaturesItem: React.FC<Props> = ({ title, path }) => {
  return (
    <Wrapper>
      <NavLink to={path} className="features-item__link">
        {setFeatureIcon(title)}
        <h4 className="features-item__title">{title}</h4>
      </NavLink>
    </Wrapper>
  );
};

export default FeaturesItem;
