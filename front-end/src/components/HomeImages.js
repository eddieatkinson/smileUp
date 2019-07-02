import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function HomeImages() {
  return (
    <CarouselProvider
      naturalSlideHeight={1}
      naturalSlideWidth={6}
      totalSlides={2}
      isPlaying
    >
      <Slider>
        <Slide index={0}>
          <div className='quotes'>
              "Life's most persistent and urgent question is, What are you doing for others?"<br /><br />
          </div>
          <div className='quotes citation'>
            - Martin Luther King, Jr. 
          </div>
        </Slide>
        <Slide index={1}>
          <div className='quotes'>
            "The best way to find yourself is to lose yourself in the service of others."<br /><br />
          </div>
          <div className='quotes citation'>
            - Mahatma Gandhi
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default HomeImages;
