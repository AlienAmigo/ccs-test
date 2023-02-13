import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import searchImg from './assets/search.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
  width: 479px;
  height: 45px;
  margin-top: 14px;
  margin-left: 58px;
  border: 1px solid var(--transparent-color);
  border-radius: 8px;
  background-color: var(--gray-light-color);
  ${MIXINS.TRANSITION('border-color')}

  &:focus-within {
    border-color: var(--main-color);
  }

  & .search-field {
    display: flex;

    &__form {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 9px 14px 7px;
    }

    &__input {
      flex: 1;
      margin-left: 9px;
      background-color: var(--transparent-color);
      border: none;
      outline: 0;
      font-family: var(--inter-font);
      color: var(--text-color);
      ${MIXINS.TEXT_OVERFLOW}

      ::placeholder {
        color: var(--gray-medium-color);
        opacity: 1;
        ${MIXINS.TRANSITION('opacity')}
      }

      &:visited {
        color: var(--text-color);
      }

      &:focus {
        ::placeholder {
          opacity: 0;
        }
      }
    }

    &__submit-btn {
      width: 30px;
      height: 30px;
      border: none;
      outline: 0;
      background: url(${searchImg}) no-repeat center center / contain,
        var(--transparent-color);
      cursor: pointer;
    }
  }
`;

export default Wrapper;
