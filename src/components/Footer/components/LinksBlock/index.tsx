import React from 'react';
import { nanoid } from 'nanoid';
import Wrapper from './style';

interface Props {
  name?: string;
  phone?: string;
  links: {
    title: string;
    href: string;
  }[];
}
const LinksBlock: React.FC<Props> = ({ name, phone, links }) => {
  return (
    <Wrapper>
      {name && <h5 className="links-block__title">{name}</h5>}
      <div className="links-block__links-wrapper">
        {links.map(item => (
          <a
            key={nanoid()}
            href={item.href}
            rel="noreferrer"
            target="_blank"
            className="links-block__link"
          >
            {item.title}
          </a>
        ))}
      </div>
    </Wrapper>
  );
};

LinksBlock.defaultProps = {
  name: '',
  phone: ''
};
export default LinksBlock;
