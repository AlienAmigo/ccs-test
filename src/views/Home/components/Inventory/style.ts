import styled from 'styled-components';
import MIXINS from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';
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
      line-height: 1.2em;
      color: var(--text-color);
    }

    &__text {
      font-size: 1.375rem;
      line-height: 1.227em;
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

  @media screen and (${BREAKPOINTS.SM}) {
    min-height: 500px;
    padding: 50px 40% 50px 70px;
    background: url(${bgImg}) no-repeat left 180px center / cover;

    & .inventory {
      &__title {
        margin: 0 0 25px;
        font-size: 1.875rem;
      }

      &__text {
        font-size: 1.2rem;
        color: var(--text-color);
      }

      &__btn {
        ${MIXINS.BUTTON_BASIC_STYLE('1.2rem')};
        width: 280px;
        height: 55px;
        margin-top: 50px;
        text-decoration: none;
      }
    }
  }

  @media screen and (${BREAKPOINTS.XS}) {
    min-height: max-content;
    padding: 30px 0 35px 20px;
    background: url(${bgImg}) no-repeat left 100px center / cover;

    & .inventory {
      &__title {
        max-width: 300px;
        margin: 0 0 25px;
        font-size: 1.875rem;
      }

      &__text {
        max-width: 300px;
        font-size: 1.2rem;
        color: var(--text-color);
      }

      &__btn {
        ${MIXINS.BUTTON_BASIC_STYLE('1.2rem')};
        width: 220px;
        height: 50px;
        margin-top: 50px;
        font-size: 1.125rem;
        text-decoration: none;
      }
    }
  }
`;

export default Wrapper;
