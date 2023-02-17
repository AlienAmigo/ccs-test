import styled from 'styled-components';
import MIXINS from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';
import payCardsImg from './assets/pay-cards.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 466px;
  margin-left: auto;
  padding-bottom: 95px;
  background: url(${payCardsImg}) no-repeat left bottom / auto;

  & .footer-subscribe-form {
    &__title {
      margin-bottom: 1.3125em;
      font-size: 1rem;
      line-height: 1.1875em;
      font-weight: 700;
      color: var(--gray-medium-color);
    }

    &__form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 57px;
      padding: 3px;
      background-color: #1b1b1b;
      border: 1px solid #1b1b1b;
      border-radius: 11px;
      ${MIXINS.TRANSITION('border-color')}

      &:focus-within {
        border-color: var(--main-color);
      }
    }

    &__input {
      display: flex;
      flex: 1;
      align-self: stretch;
      align-items: center;
      background-color: var(--transparent-color);
      padding: 0 17px;
      border: none;
      outline: 0;
      font-family: var(--inter-font);
      font-size: 1rem;
      color: var(--white-color);
      ${MIXINS.TEXT_OVERFLOW()};

      ::placeholder {
        color: #c4c4c4;
        ${MIXINS.TEXT_OVERFLOW()};
        ${MIXINS.TRANSITION('color', '0.35s')}
      }

      &:focus {
        ::placeholder {
          color: var(--transparent-color);
        }
      }
    }

    &__submit-btn {
      ${MIXINS.BUTTON_BASIC_STYLE('1rem', '8px')};
      align-self: stretch;
      width: 147px;
      padding: 16px 0;
      border: none;
      outline: 0;
      line-height: 1.2em;
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    order: 0;
    width: 100%;
    margin: 0 auto;
    padding: 0 300px 30px 0;
    background-position: right 30px bottom 40px;

    & .footer-subscribe-form {
      &__title {
        margin-bottom: 1.3125rem;
        font-size: 1rem;
        line-height: 1.1875rem;
        font-weight: 700;
      }
    }
  }

  @media screen and (${BREAKPOINTS.XS}) {
    width: 100%;
    max-width: 450px;
    margin-bottom: 30px;
    padding: 0;
    background: none;

    & .footer-subscribe-form {
      &__title {
        margin-bottom: 1.3125rem;
        max-width: 400px;
        width: 100%;
        font-size: 0.875rem;
        line-height: 1.2em;
      }

      &__form {
        max-width: 450px;
        width: 100%;
        height: 45px;
        padding: 2px;
      }

      &__input {
        padding: 0 12px;
        font-size: 0.875rem;
      }

      &__submit-btn {
        ${MIXINS.BUTTON_BASIC_STYLE('0.875rem', '8px')};
        align-self: stretch;
        width: 120px;
        padding: 14px 0;
        border: none;
        outline: 0;
      }
    }
  }
`;

export default Wrapper;
