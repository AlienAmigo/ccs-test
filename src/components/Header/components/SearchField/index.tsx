import React from 'react';
import Wrapper from './style';

const onSubmit = (event: React.SyntheticEvent): void => {
  event.preventDefault();
};

interface Props {
  className?: string;
  phoneMenu?: boolean;
}

const SearchField: React.FC<Props> = ({ className, phoneMenu }) => {
  return (
    <Wrapper className={className} phoneMenu={phoneMenu}>
      <form
        id="search-form"
        onSubmit={onSubmit}
        action=""
        method="POST"
        className="search-field__form"
      >
        <input
          type="text"
          placeholder="Product SKU, Name…"
          className="search-field__input"
        />
        <input type="submit" value="" className="search-field__submit-btn" />
      </form>
    </Wrapper>
  );
};

SearchField.defaultProps = {
  className: '',
  phoneMenu: false
};

export default SearchField;
