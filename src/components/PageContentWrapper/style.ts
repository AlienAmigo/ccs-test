import styled, { css } from 'styled-components';
import { MIXINS } from 'components/UIKit/Mixins';

const Wrapper = styled.main`
  display: flex;
  flex: 2;
  flex-direction: column;
  width: calc(var(--screen-lg) - (2 * var(--gap-lg)));
  margin: 0 auto;

  ${MIXINS.MEDIA(
    'tablet',
    css`
      width: calc(var(--screen-sm) - (2 * var(--gap-sm)));
    `
  )}
`;

export default Wrapper;
