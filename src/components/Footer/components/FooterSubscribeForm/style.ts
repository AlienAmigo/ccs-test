import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
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
      margin-bottom: 1.3125rem;
      font-size: 1rem;
      line-height: 1.1875rem;
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
      line-height: 1.1875rem;
    }
  }
`;

export default Wrapper;
