import styled from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 71px;
  border-radius: 16px;
  overflow: hidden;

  .gallery {
    width: 100%;
    height: max-content;
    border-radius: 16px;
    position: relative;

    .control-dots {
      display: flex;
      flex-direction: row;
      gap: 9px;
      position: absolute;
      right: 20px;
      bottom: 21px;
      width: max-content;
      height: max-content;

      & .dot {
        width: 8px;
        height: 8px;
        margin: 0;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.6);
        outline-color: var(--submain-color);
        opacity: 1;
        ${MIXINS.TRANSITION('width')}

        &:not(.selected):hover {
          opacity: 0.65;
        }

        &.selected {
          width: 27px;
          background: var(--white-color);
        }
      }
    }
  }
`;

export default Wrapper;
