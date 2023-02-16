import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';
import prevImg from './assets/arrow-prev.svg';
import nextImg from './assets/arrow-next.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 62px;

  & .categories {
    &__title {
      margin-top: 10px;
      font-size: 1.5625rem;
      line-height: 1.875rem;
      color: var(--text-color);
    }

    &__live-chat-btn {
      ${MIXINS.BUTTON_BASIC_STYLE('1rem', '25px')};
      display: flex;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      min-width: 181px;
      height: 50px;
      padding: 0 28px 0 24px;
      box-shadow: 0 4px 11px rgba(33, 33, 33, 0.35);
      text-decoration: none;

      svg {
        width: 28px;
        height: 26px;
        margin-left: 31px;
      }

      &:hover {
        box-shadow: none;
      }
    }

    &__carousel-wrapper {
      margin-top: -36px;
      padding-top: 60px;
      overflow: hidden;
    }

    &__carousel {
      margin: 0 -21px;
      overflow: visible;

      .react-multiple-carousel__arrow {
        position: absolute;
        bottom: calc(100% + 13px);
        width: 46px;
        min-width: inset;
        height: 46px;
        min-height: unsets;
        border-radius: 50%;
        background-color: var(--gray-light-color);
        background-repeat: no-repeat;
        background-position: center center;
        ${MIXINS.TRANSITION('background-color')}

        &::before {
          display: none;
        }

        &:hover {
          background-color: var(--submain-color);
        }

        &.react-multiple-carousel__arrow--left {
          left: 174px;
          background-image: url(${prevImg});
        }

        &.react-multiple-carousel__arrow--right {
          left: 230px;
          background-image: url(${nextImg});
        }
      }
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    & .categories {
      &__live-chat-btn {
        ${MIXINS.BUTTON_BASIC_STYLE('0.875rem', '20px')};
        flex-direction: row;
        min-width: max-content;
        height: 45px;
        padding: 0 28px 0 24px;

        svg {
          width: 24px;
          height: 21px;
          margin-left: 15px;
        }
      }

      &__carousel {
        margin: 0 -5px;

        .react-multiple-carousel__arrow {
          position: absolute;
          bottom: calc(100% + 13px);
          width: 36px;
          height: 36px;
        }
      }
    }
  }

  @media screen and (${BREAKPOINTS.XS}) {
    & .categories {
      &__carousel {
        margin: 0;

        .react-multiple-carousel__arrow {
          display: none;
        }
      }
    }
  }
`;

export default Wrapper;
