import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

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
      text-decoration: none;
      font-size: 1rem;
      color: var(--white-color);
      ${MIXINS.TRANSITION('color')};

      &:hover {
        color: var(--submain-color);
      }
    }
  }
`;

export default Wrapper;
