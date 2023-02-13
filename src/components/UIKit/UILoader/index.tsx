import React from 'react';
import Wrapper from './style';
import { ReactComponent as LoaderImg } from './assets/loader.svg';

interface Props {
  role?: string;
}
const UILoader: React.FC<Props> = ({ role }) => {
  return (
    <Wrapper role={role}>
      <LoaderImg />
    </Wrapper>
  );
};

UILoader.defaultProps = {
  role: ''
};
export default UILoader;
