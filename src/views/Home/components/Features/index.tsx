import React from 'react';
import PATH from 'routes/path';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import featuresItemsList from './data';
import FeaturesItem from './components/FeaturesItem';
import Wrapper from './style';

const Features = () => {
  return (
    <Wrapper>
      {featuresItemsList.map(item => (
        <FeaturesItem key={nanoid()} title={item.title} path={item.path} />
      ))}
    </Wrapper>
  );
};

export default Features;
