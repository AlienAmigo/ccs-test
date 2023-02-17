import React, { useState, useEffect } from 'react';
import { ReactComponent as UpBtnImg } from './assets/up.svg';
import Wrapper from './style';

const UpButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  });

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper onClick={onClick} visible={visible}>
      <UpBtnImg />
    </Wrapper>
  );
};

export default UpButton;
