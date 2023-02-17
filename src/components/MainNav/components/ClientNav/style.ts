import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin: 21px var(--gap-lg) 0 0;

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

  @media screen and (${BREAKPOINTS.SM}) {
    order: 2;
    position: relative;
    top: unset;
    right: unset;
    width: max-content;
    height: max-content;
    margin: 0 auto;
    padding: 0;

    & .client-nav {
      &__list {
        gap: 16px;
      }

      &__icon {
        max-width: 24px;
        height: 24px;
        margin-right: 6px;
      }

      &__cart-counter {
        top: -5px;
        font-size: 0.6875rem;
      }
    }
  }

  @media screen and (${BREAKPOINTS.XS}) {
    margin-right: 10px;

    & .client-nav {
      &__list {
        gap: 6px;
      }

      &__item-text {
        display: none;
      }
    }
  }
`;

export default Wrapper;
