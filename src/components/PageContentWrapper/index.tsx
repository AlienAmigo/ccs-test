import React from 'react';
import { ChildrenProps } from 'types/types';
import Wrapper from './style';

const PageContentWrapper: React.FC<ChildrenProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageContentWrapper;
