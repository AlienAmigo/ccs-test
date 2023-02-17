import styled, { css } from 'styled-components';
import MIXINS from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';

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
      outline-color: var(--submain-color);

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

  @media screen and (${BREAKPOINTS.XS}) {
    margin-left: auto;
    margin-right: var(--gap-sm);
  }
`;

export default Wrapper;
