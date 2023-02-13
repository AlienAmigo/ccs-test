import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ role?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  min-width: 80px;
  margin: 0 auto;

  ${({ role }) =>
    role === 'main' &&
    css`
      position: absolute;
      top: 50vh;
      left: 50vw;
      z-index: var(--z-loader);
      margin: 0;
      transform: translate(-50%, -50%);
    `}
`;

export default Wrapper;
