import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: -12px;
  right: var(--gap-lg);
  width: max-content;

  & .help-nav {
    &__list {
      display: flex;
      gap: 14px;
      list-style: none;
    }

    &__item {
    }

    &__link {
      display: inline-block;
      border-bottom: 1px solid var(--submain-color);
      text-decoration: none;
      font-family: var(--inter-font);
      color: var(--main-color);
      outline-color: var(--submain-color);
      ${MIXINS.TRANSITION('color')};
      ${MIXINS.TRANSITION('border-color')};

      &:not(.active) {
        &:visited {
          color: var(--main-color);
        }

        &:active,
        &:hover {
          border-color: var(--main-color);
          color: var(--main-color);
        }
      }

      &.active {
        border-color: var(--main-color);
        color: var(--submain-color);
      }
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    order: 1;
    position: relative;
    top: unset;
    right: unset;
    width: 100%;
    height: max-content;
    margin: 25px 0;
  }
`;

export default Wrapper;
