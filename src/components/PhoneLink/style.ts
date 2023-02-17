import styled, { css } from 'styled-components';
import MIXINS from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.div<{ place?: string }>`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 22px;
  right: 5px;
  font-size: 1.375rem;
  line-height: 1.6875em;
  outline-color: var(--submain-color);

  & .phone-link {
    &__icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      path {
        fill: var(--main-color);
        ${MIXINS.TRANSITION('fill')}
      }
    }

    &__link {
      display: inline-flex;
      margin-top: 2px;
      padding-bottom: 1px;
      border-bottom: 1px solid var(--submain-color);
      text-decoration: none;
      white-space: nowrap;
      color: var(--main-color);
      outline-color: var(--submain-color);
      ${MIXINS.TRANSITION('color')}
      ${MIXINS.TRANSITION('border-color')}
    }
  }

  &:hover {
    & .phone-link {
      &__icon {
        path {
          fill: var(--submain-color);
        }
      }

      &__link {
        border-bottom: 1px solid var(--submain-color);
        color: var(--submain-color);
      }
    }
  }

  ${({ place }) =>
    place === 'footer' &&
    css`
      position: relative;
      bottom: unset;
      right: unset;
      margin-top: 9px;
      font-size: 1rem;
      line-height: 1.1875em;
      color: var(--white-color);

      & .phone-link {
        &__icon {
          width: 18px;
          height: 18px;
          margin-right: 7px;
        }

        &__link {
          border-bottom: 1px solid var(--gray-light-color);
          padding-bottom: 3px;
          color: var(--white-color);
        }
      }
    `}

  @media screen and (${BREAKPOINTS.SM}) {
    display: inline-flex;
    align-items: center;
    position: relative;
    top: unset;
    bottom: unset;
    right: unset;
    margin: 0 auto;
    font-size: 1rem;

    & .phone-link {
      &__icon {
        width: 18px;
        height: 18px;
        margin-right: 2px;
      }
    }

    ${({ place }) =>
      place === 'footer' &&
      css`
        margin-top: 9px;
        font-size: 0.875rem;
      `}
  }

  @media screen and (${BREAKPOINTS.XXS}) {
    ${({ place }) =>
      place === 'header' &&
      css`
        display: none;
      `}
  }
`;

export default Wrapper;
