import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import meishi from '../images/meishi.png';
import nba from '../images/nbaBuild.png';
import urbanBottle from '../images/urbanBottle.png';

const items = [
    {
      src: meishi,
      header: 'Meishi',
      altText: 'Landing page for Meishi react app.',
      caption: `A react app that allows users to scan and collect others' cards`
    },
    {
      src: nba,
      header: 'NBA Career Longevity App',
      altText: 'Landing page for NBA Career Longevity Predictor react app',
      caption: `A react app for users to compare and predict NBA players' careers`
    },
    {
      src: urbanBottle,
      header: 'Urban Bottle Wine & Spirits',
      altText: 'Landing page for Urban Bottle',
      caption: 'Home page for Casper, Wyoming boutique liquor store and bar'
    }
  ];

const Work = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
    return (
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
    );
    })

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
  }
  
  export default Work;