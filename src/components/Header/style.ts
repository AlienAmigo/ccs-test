import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: var(--screen-lg);
  min-height: 160px;
  margin: 0 auto;
  padding: var(--gap-lg);
  background-color: var(--white-color);

  & .header {
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 106px;
      height: 45px;
      margin-top: 19px;

      &:focus {
        outline-color: var(--submain-color);
      }
    }

    &__logo-img {
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: center;
    }

    &__main-nav-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      padding: var(--gap-lg);
    }
  }
`;

export default Wrapper;
