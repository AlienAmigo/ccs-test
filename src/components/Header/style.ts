import styled, { css } from 'styled-components';
import { BREAKPOINTS } from 'components/UIKit/Style';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: var(--z-menu);
  width: 100%;

  & .header {
    &__wrapper {
      display: flex;
      position: relative;
      width: var(--screen-lg);
      min-height: 160px;
      margin: 0 auto;
      padding: var(--gap-lg);
      background-color: var(--white-color);
    }
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      width: 106px;
      height: 45px;
      margin-top: 19px;
      opacity: 1;
      ${MIXINS.TRANSITION('opacity')}

      &:not(.active) {
        &:hover {
          opacity: 0.65;
        }
      }
    }

    &__logo-img {
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: center;
    }

    &__main-nav-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: var(--gap-lg);
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    & .header {
      &__wrapper {
        //flex-direction: column;
        align-items: flex-start;
        //justify-content: space-between;
        justify-content: flex-start;
        position: relative;
        width: var(--screen-sm);
        min-height: 70px;
        padding: var(--gap-sm);
      }

      &__logo {
        position: relative;
        margin: 0 20px 0 0;
        width: 85px;
      }

      &__logo-img {
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: center;
      }

      &__main-nav-wrapper {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: flex-start;
        position: relative;
        top: 0;
        left: unset;
        min-width: max-content;
        margin: 5px 0 0 0;
        padding: 0;
      }
    }
  }
`;

export default Wrapper;
