import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.div`
  & .features-item {
    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 132px;
      text-decoration: none;
      color: var(--text-color);
      outline-color: var(--submain-color);
      ${MIXINS.TRANSITION('color')}

      svg {
        max-width: 77px;
        max-height: 75px;
        path {
          ${MIXINS.TRANSITION('fill')}
          fill: var(--main-color);
        }
      }

      &:visited {
        color: var(--text-color);
      }

      &:hover,
      &:active {
        color: var(--submain-color);

        svg {
          path {
            fill: var(--submain-color);
          }
        }
      }
    }
  }
`;

export default Wrapper;
