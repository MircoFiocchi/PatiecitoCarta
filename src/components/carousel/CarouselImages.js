import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import data from './data/data';

const CarouselImages = () => {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  return (
    <Carousel
      data={data}
      time={3000}
      width="100%"
      height="700px"
      captionStyle={captionStyle}
      captionPosition="bottom"
      automatic={true}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      thumbnailWidth="100px"
    />
  );
};

export default CarouselImages;
