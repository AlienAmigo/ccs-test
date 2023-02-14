import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.div`
  display: flex;
  margin: 21px var(--gap-lg) 0 auto;

  & .client-nav {
    &__list {
      display: flex;
      gap: 19px;
      list-style: none;
    }

    &__item {
      display: flex;
      position: relative;
      height: 30px;
    }

    &__icon {
      width: 30px;
      height: 30px;
      margin-right: 9px;

      &--quick-order {
        width: 18px;
      }

      &--lists {
        width: 25px;
      }
    }

    &__cart-counter {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -7px;
      left: 14px;
      width: max-content;
      min-width: 24px;
      min-height: 21px;
      padding: 4px 4px 3px;
      background: rgba(72, 89, 240, 0.99);
      box-shadow: 0 0 0 2px rgba(72, 89, 240, 0.2);
      border-radius: 10px;
      font-size: 0.75rem;
      line-height: 0.9375em;
      font-weight: 700;
      color: var(--white-color);
    }

    &__link {
      display: inline-flex;
      align-items: center;
      margin-top: 8px;
      padding-bottom: 3px;
      outline-color: var(--submain-color);
      text-decoration: none;
      color: var(--text-color);
      cursor: pointer;
      ${MIXINS.TRANSITION('color')};
      ${MIXINS.TRANSITION('border-color')};

      &:visited {
        color: var(--text-color);
      }

      &.active {
        color: var(--main-color);

        svg {
          path {
            fill: var(--main-color);
          }
        }
      }

      &:not(.active) {
        svg {
          path {
            fill: #9b9591;
          }
        }

        &:hover,
        &:active {
          color: var(--submain-color);

          svg {
            path {
              fill: var(--submain-color);
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
