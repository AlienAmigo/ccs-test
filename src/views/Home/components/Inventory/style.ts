import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import bgImg from './assets/bg.png';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 682px;
  padding: 130px 717px 0 75px;
  border: 1px solid #e2e0df;
  border-radius: 16px;
  background: url(${bgImg}) no-repeat right center / contain;

  & .inventory {
    &__title {
      margin: 0 0 40px;
      font-size: 2.1875rem;
      line-height: 2.625rem;
      color: var(--text-color);
    }

    &__text {
      font-size: 1.375rem;
      line-height: 1.6875rem;
      color: var(--text-color);
    }

    &__btn {
      ${MIXINS.BUTTON_BASIC_STYLE()};
      width: 320px;
      height: 65px;
      margin-top: 65px;
      text-decoration: none;
    }
  }
`;

export default Wrapper;
