import React from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import PhoneLink from 'components/PhoneLink';
import Wrapper from './style';

interface Props {
  name?: string;
  links: {
    title: string;
    href: string;
  }[];
}
const LinksBlock: React.FC<Props> = ({ name, links }) => {
  return (
    <Wrapper>
      {name && <h5 className="links-block__title">{name}</h5>}
      <div className="links-block__links-wrapper">
        {links.map(item => (
          <Link
            key={nanoid()}
            to={item.href}
            rel="noreferrer"
            className="links-block__link"
          >
            {item.title}
          </Link>
        ))}
        {name === 'Support' && <PhoneLink place="footer" />}
      </div>
    </Wrapper>
  );
};

LinksBlock.defaultProps = {
  name: ''
};
export default LinksBlock;
