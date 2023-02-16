import styled, { css } from 'styled-components';
import { BREAKPOINTS } from 'components/UIKit/Style';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.main`
  display: flex;
  flex: 2;
  flex-direction: column;
  width: calc(var(--screen-lg) - (2 * var(--gap-lg)));
  margin: 0 auto;

  @media screen and (${BREAKPOINTS.SM}) {
    width: calc(var(--screen-sm) - (2 * var(--gap-sm)));
  }

  @media screen and (${BREAKPOINTS.XS}) {
    width: calc(100vw - (2 * var(--gap-xs)));
  }
`;

export default Wrapper;
