import styled, { css } from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.button`
  display: none;

  ${MIXINS.MEDIA(
    'tablet',
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border: none;
      background-color: var(--transparent-color);
      cursor: pointer;

      svg {
        path {
          ${MIXINS.TRANSITION('fill')}
          fill: var(--gray-medium-color);
        }
      }

      &:hover,
      &:active {
        svg {
          path {
            fill: var(--submain-color);
          }
        }
      }
    `
  )}
`;

export default Wrapper;
