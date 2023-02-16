import styled from 'styled-components';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: calc(var(--screen-lg) - (2 * var(--gap-lg)));
  margin: 0 auto;
  padding: 37px 23px 13px;
  background-color: var(--text-color);
  border-radius: 16px 16px 0 0;

  & .footer {
    &__wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    &__links-block-wrapper {
      display: flex;
      flex-direction: column;
      min-width: max-content;
      margin-right: 130px;
    }

    &__copyright {
      margin: 1.75rem auto 0;
      font-size: 1rem;
      line-height: 1.1875rem;
      color: var(--gray-medium-color);
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    width: calc(var(--screen-sm) - (2 * var(--gap-sm)));
    max-width: 100vw;

    & .footer {
      &__wrapper {
        flex-wrap: wrap;
        justify-content: space-around;
      }

      &__links-block-wrapper {
        order: 2;
        margin-right: 0;
      }

      &__copyright {
        margin: 1.75em auto 0;
        font-size: 0.875rem;
        line-height: 1.2em;
      }
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    width: calc(var(--screen-sm) - (2 * var(--gap-sm)));
    max-width: 100vw;

    & .footer {
      &__wrapper {
        flex-wrap: wrap;
        justify-content: space-around;
      }

      &__links-block-wrapper {
        order: 2;
        margin-right: 0;
      }

      &__copyright {
        margin: 1.75em auto 0;
        font-size: 0.875rem;
        line-height: 1.2em;
      }
    }
  }

  @media screen and (${BREAKPOINTS.XS}) {
    width: 100%;
    max-width: 100vw;

    & .footer {
      &__wrapper {
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 25px;
        width: max-content;
        margin: 0 auto;
      }
    }
  }
`;

export default Wrapper;
