import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

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
      padding-bottom: 1px;
      border-bottom: 1px solid var(--submain-color);
      text-decoration: none;
      font-family: var(--inter-font);
      color: var(--main-color);
      outline-color: var(--submain-color);
      ${MIXINS.TRANSITION('color')};
      ${MIXINS.TRANSITION('border-color')};

      &:visited {
        color: var(--main-color);
      }

      &:active,
      &:hover {
        border-color: var(--main-color);
        color: var(--main-color);
      }
    }
  }
`;

export default Wrapper;
