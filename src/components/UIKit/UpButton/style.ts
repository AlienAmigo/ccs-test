import styled, { css } from 'styled-components';
import { BREAKPOINTS } from 'components/UIKit/Style';
import MIXINS from 'components/UIKit/Mixins';
import ANIMATE from 'components/UIKit/Animate';

const Wrapper = styled.div<{ visible: boolean }>`
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: var(--up-btn);
  right: calc((100vw - var(--screen-lg)) / 2 + var(--gap-lg));
  bottom: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.35;
  transition: opacity 0.35s ease-in;
  ${ANIMATE.FADE_IN_UP};
  animation: fadeInUp 0.35s ease-in;
  
  ${({ visible }) =>
    visible
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};
  
  & svg {
    width: 100%;
    height: 100%;
    path {
      fill: var(--submain-color);
    }
  }
  
  &:hover {
    opacity: 1;
  }
}

@media screen and (${BREAKPOINTS.SM}) {
  right: calc((100vw - var(--screen-sm)) / 2 + var(--gap-sm));
  width: 50px;
  height: 50px;
  }

  @media screen and (${BREAKPOINTS.XS}) {
    right: var(--gap-xs);
    width: 45px;
    height: 45px;
  }
`;

export default Wrapper;
