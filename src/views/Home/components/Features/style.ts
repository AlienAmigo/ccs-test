import styled from 'styled-components';
import { BREAKPOINTS } from 'components/UIKit/Style';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 160px;
  margin: 107px 0 112px;

  @media screen and (${BREAKPOINTS.SM}) {
    justify-content: space-around;
    flex-wrap: wrap;
    gap: unset;
    margin: 80px 0;
  }

  @media screen and (${BREAKPOINTS.XS}) {
    justify-content: space-around;
    flex-wrap: wrap;
    gap: unset;
    margin: 50px 0;
  }
`;

export default Wrapper;
