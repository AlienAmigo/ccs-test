import React from 'react';
import Wrapper from './style';

const onSubmit = (event: React.SyntheticEvent): void => {
  event.preventDefault();
};

function FooterSubscribeForm() {
  return (
    <Wrapper>
      <h5 className="footer-subscribe-form__title">
        Subscribe to our mailing list to receive exclusive offers and the latest
        product updates
      </h5>
      <form
        id="message-form"
        onSubmit={onSubmit}
        action=""
        method="POST"
        className="footer-subscribe-form__form"
      >
        <input
          type="email"
          placeholder="Your E-mail"
          className="footer-subscribe-form__input"
        />
        <input
          type="submit"
          value="Subscribe"
          className="footer-subscribe-form__submit-btn"
        />
      </form>
    </Wrapper>
  );
}

export default FooterSubscribeForm;
