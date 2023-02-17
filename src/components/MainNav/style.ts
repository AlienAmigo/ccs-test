import styled, { css } from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import { ANIMATE } from 'components/UIKit/Animate';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.nav<{ phoneMenu: boolean }>`
  display: flex;
  position: relative;
  min-width: 100%;
  min-height: 100%;

  & .main-nav {
    &__wrapper {
      display: flex;
      position: relative;
      min-width: 100%;
      min-height: 100%;
    }

    &__menu {
      display: flex;
      position: relative;
      min-width: 100%;
      min-height: 100%;
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    ${({ phoneMenu }) =>
      css`
        min-width: auto;
        position: relative;

        & .main-nav {
          &__wrapper {
            display: ${phoneMenu ? 'flex' : 'none'};
            position: fixed;
            z-index: var(--z-mobile-menu);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
          }

          &__menu {
            display: flex;
            flex-direction: column;
            position: relative;
            min-width: max-content;
            min-height: 100%;
            background-color: var(--white-color);
            padding: var(--gap-sm);
            overflow: auto;
            ${MIXINS.SCROLL_STYLE()}
            box-shadow: 12px 0 8px 0 rgba(0, 0, 0, 0.2);
            ${ANIMATE.SLIDE_IN_LEFT}
            animation: slideInLeft 0.25s ease-in;
          }
        }
      `}
  }
`;

export default Wrapper;
