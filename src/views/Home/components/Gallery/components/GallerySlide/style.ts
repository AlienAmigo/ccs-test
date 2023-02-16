import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';
import fiberglassImg from './assets/fiberglass.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 675px;
  background: linear-gradient(
      90.36deg,
      #1f2670 29.82%,
      rgba(39, 48, 139, 0) 99.68%
    ),
    linear-gradient(
      110.67deg,
      rgba(54, 68, 196, 0.74) 12.49%,
      rgba(49, 59, 152, 0.51) 84.84%
    ),
    url(${fiberglassImg}) no-repeat right center / 104% 104%;

  & .gallery-slide {
    &__title {
      position: absolute;
      top: 244px;
      left: 96px;
      width: 582px;
      height: 228px;
      text-align: left;
      font-size: 2.875rem;
      line-height: 1.217em;
      color: var(--white-color);
    }

    &__title-comment {
      display: block;
      margin: 1rem;
      font-size: 0.75em;
      font-weight: 400;
    }

    &__btn {
      ${MIXINS.BUTTON_BASIC_STYLE()}
      position: absolute;
      bottom: 526px;
      left: 96px;
      width: 320px;
      height: 65px;
      text-decoration: none;
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    height: 380px;

    & .gallery-slide {
      &__title {
        top: 50px;
        left: 70px;
        font-size: 2.5rem;
      }

      &__btn {
        top: 280px;
        left: 70px;
        width: 280px;
        height: 55px;
        font-size: 1.2rem;
        text-decoration: none;
      }
    }
  }

  @media screen and (${BREAKPOINTS.XS}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: max-content;
    min-height: 330px;
    padding: 30px 30px 35px;

    & .gallery-slide {
      &__title {
        position: relative;
        top: unset;
        left: unset;
        width: 100%;
        height: max-content;
        font-size: 2rem;
      }

      &__btn {
        position: relative;
        top: unset;
        bottom: unset;
        left: unset;
        width: 220px;
        height: 50px;
        margin: 15px 0 25px;
        font-size: 1.125rem;
        text-decoration: none;
      }
    }
  }
`;

export default Wrapper;
