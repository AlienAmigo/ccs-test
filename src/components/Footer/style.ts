import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: calc(var(--screen-lg) - (2 * var(--gap-lg)));
  margin: 0 auto;
  padding: 37px 23px 13px;
  background-color: var(--text-color);
  border-radius: 16px 16px 0 0;

  & .footer {
    &__wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    &__links-block-wrapper {
      display: flex;
      flex-direction: column;
      min-width: max-content;
      margin-right: 130px;
    }

    &__copyright {
      margin: 1.75rem auto 0;
      font-size: 1rem;
      line-height: 1.1875rem;
      color: var(--gray-medium-color);
    }
  }
`;

export default Wrapper;
