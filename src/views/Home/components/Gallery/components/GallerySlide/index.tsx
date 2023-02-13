import React from 'react';
import Wrapper from './style';

interface Props {
  ind?: number | string;
}
const GallerySlide: React.FC<Props> = ({ ind }) => {
  return (
    <Wrapper>
      <h3 className="gallery-slide__title">
        Fiberglass and specialty metals are in stock across the United States
        {ind ? (
          <span className="gallery-slide__title-comment">{`slide ${ind}`}</span>
        ) : (
          ''
        )}
      </h3>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="gallery-slide__btn">
        Shop Now
      </a>
    </Wrapper>
  );
};

GallerySlide.defaultProps = {
  ind: ''
};
export default GallerySlide;
