import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex: 2;
  flex-direction: column;
  width: calc(var(--screen-lg) - (2 * var(--gap-lg)));
  margin: 0 auto;
`;

export default Wrapper;
