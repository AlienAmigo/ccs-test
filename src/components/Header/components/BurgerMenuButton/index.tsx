import React from 'react';
import Wrapper from './style';
import { ReactComponent as BurgerImg } from './assets/burgerButton.svg';

interface Props {
  onClick: () => void;
}

const BurgerMenuButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <BurgerImg />
    </Wrapper>
  );
};

export default BurgerMenuButton;
