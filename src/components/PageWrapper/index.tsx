import React from 'react';
import { ChildrenProps } from 'types/types';
// import UpButton from 'components/UpButton';
import Wrapper from './style';

const PageWrapper: React.FC<ChildrenProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
