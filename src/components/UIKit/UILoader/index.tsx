import React from 'react';
import Wrapper from './style';
import { ReactComponent as LoaderImg } from './assets/loader.svg';

const UILoader: React.FC = () => {
  return (
    <Wrapper>
      <LoaderImg />
    </Wrapper>
  );
};

export default UILoader;
