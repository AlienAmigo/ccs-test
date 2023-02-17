import styled from 'styled-components';
import MIXINS from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: max-content;

  & .links-block {
    &__title {
      margin-bottom: 1.4375rem;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--gray-dark);
    }

    &__links-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__link,
    &__link:visited {
      display: flex;
      text-decoration: none;
      font-size: 1rem;
      color: var(--white-color);
      ${MIXINS.TRANSITION('color')};

      &:hover {
        color: var(--submain-color);
      }
    }
  }

  @media screen and (${BREAKPOINTS.SM}) {
    & .links-block {
      &__title {
        margin: 1rem 0 0.5rem;
        font-size: 1rem;
      }

      &__links-wrapper {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      &__link,
      &__link:visited {
        font-size: 0.875rem;
      }
    }
  }
`;

export default Wrapper;
