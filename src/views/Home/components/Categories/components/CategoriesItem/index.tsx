import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './style';

interface Props {
  title: string;
  path: string;
  element: string;
}

const CategoriesItem: React.FC<Props> = ({ title, path, element }) => {
  return (
    <Wrapper>
      <Link to={path} className="categories-item__link">
        <div className="categories-item__img-wrapper">
          <img
            src={`${element}`}
            alt={title}
            className="categories-item__img"
          />
        </div>
        <h4 className="categories-item__title">{title}</h4>
      </Link>
    </Wrapper>
  );
};

export default CategoriesItem;
