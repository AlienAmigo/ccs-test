import React from 'react';
import { nanoid } from 'nanoid';
import LinksBlock from './components/LinksBlock';
import FooterSubscribeForm from './components/FooterSubscribeForm';
import HelpfulLinks from './data/Helpful Links';
import Support from './data/Support';
import CustomerServices from './data/CustomerServices';
import Wrapper from './style';

const LinksBlocks = [HelpfulLinks, CustomerServices, Support];

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__wrapper">
        {LinksBlocks.map(item => (
          <div className="footer__links-block-wrapper">
            <LinksBlock key={nanoid()} name={item.name} links={item.links} />
          </div>
        ))}
        <FooterSubscribeForm />
      </div>
      <small className="footer__copyright">
        © «Brand» 2022, All Rights Reserved
      </small>
    </Wrapper>
  );
};

export default Footer;
