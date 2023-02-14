import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.div`
  width: 197px;
  height: 269px;
  margin: 0 auto;

  & .categories-item {
    &__link {
      text-decoration: none;
      color: var(--text-color);
      ${MIXINS.TRANSITION('color')}

      &:hover {
        color: var(--submain-color);

        img {
          opacity: 0.6;
        }
      }
    }

    &__img-wrapper {
      width: 100%;
      height: 197px;
      border-radius: 8px;
      overflow: hidden;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      opacity: 1;
      ${MIXINS.TRANSITION('opacity')}
    }

    &__title {
      margin-top: 14px;
      text-decoration: none;
      font-size: 1rem;
      line-height: 1.1875rem;
      color: inherit;
    }
  }
`;

export default Wrapper;
