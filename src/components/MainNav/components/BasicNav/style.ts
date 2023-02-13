import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.div`
  display: flex;

  & .basic-nav {
    display: flex;

    &__list {
      display: flex;
      gap: 19px;
      margin-top: auto;
      list-style: none;
    }

    &__item {
      height: max-content;
    }

    &__link {
      font-size: 1.375rem;
      padding-bottom: 1px;
      border-bottom: 1px solid #cdcac8;
      text-decoration: none;
      color: var(--text-color);
      ${MIXINS.TRANSITION('color')};
      ${MIXINS.TRANSITION('border-color')};

      :focus {
        outline-color: var(--submain-color);
      }

      &:not(.active) {
        &:visited {
          color: var(--text-color);
        }

        &:hover,
        &:active {
          border-color: var(--main-color);
          color: var(--submain-color);
        }
      }

      &.active {
        border-color: var(--main-color);
        color: var(--main-color);
      }
    }
  }
`;

export default Wrapper;
