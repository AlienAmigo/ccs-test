import React from 'react';
import { ReactComponent as PhoneSvg } from './assets/phone.svg';
import Wrapper from './style';

interface Props {
  place?: string;
  className?: string;
}
const PhoneLink: React.FC<Props> = ({ place, className }) => {
  return (
    <Wrapper className={className} place={place}>
      <PhoneSvg className="phone-link__icon" />
      <a href="tel:844434672" className="phone-link__link">
        +(844) 434-672
      </a>
    </Wrapper>
  );
};

PhoneLink.defaultProps = {
  place: 'header',
  className: ''
};

export default PhoneLink;
