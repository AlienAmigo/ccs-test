import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GallerySlide from './components/GallerySlide';
import Wrapper from './style';

const Gallery = () => {
  return (
    <Wrapper>
      <Carousel
        className="gallery"
        showArrows={false}
        infiniteLoop
        swipeable
        emulateTouch
        dynamicHeight
        showThumbs={false}
        showStatus={false}
        showIndicators
        useKeyboardArrows
        transitionTime={750}
      >
        <GallerySlide ind={0} />
        <GallerySlide ind={2} />
        <GallerySlide ind={3} />
        <GallerySlide ind={4} />
      </Carousel>
    </Wrapper>
  );
};

export default Gallery;
