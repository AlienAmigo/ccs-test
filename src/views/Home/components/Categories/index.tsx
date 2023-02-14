import React from 'react';
import { nanoid } from 'nanoid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoriesItem from './components/CategoriesItem';
import { ReactComponent as LiveChatArrowImg } from './assets/live-chat-arrow.svg';
import Wrapper from './style';
import categoriesList from './data';

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1440, min: 768 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Categories = () => {
  return (
    <Wrapper>
      <h2 className="categories__title">Categories</h2>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className="categories__live-chat-btn">
        Live Chat
        <LiveChatArrowImg />
      </a>
      <div className="categories__carousel-wrapper">
        <Carousel
          responsive={responsive}
          centerMode={false}
          infinite
          autoPlaySpeed={1000}
          keyBoardControl
          customTransition="all .5s"
          transitionDuration={750}
          containerClass="categories__carousel"
        >
          {categoriesList.map(item => (
            <CategoriesItem
              key={nanoid()}
              title={item.title}
              path={item.path}
              element={item.element}
            />
          ))}
        </Carousel>
      </div>
    </Wrapper>
  );
};

export default Categories;
