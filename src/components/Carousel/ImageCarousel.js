import { CarouselProvider, Image, Slide, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../Carousel/CustomDotGroup";

import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';


const ImageCarousel = () => (
    <CarouselProvider
        isIntrinsicHeight={true}
        totalSlides={3}
    >
        <Slider>
            <Slide tag="a" index={0}>
                <img src={slide1} alt='slide1' style={{ display:'block', margin:'0 auto', width: 400, height: 400 }}></img>
            </Slide>
            <Slide tag="a" index={1}>
                <img src={slide2} alt='slide2' style={{  display:'block', margin:'0 auto', width: 400, height: 400 }}></img>
            </Slide>
            <Slide tag="a" index={2}>
                <img src={slide3} alt='slide3' style={{ display:'block', margin:'0 auto',  width: 400, height: 400 }}></img>
            </Slide>

        </Slider>

        <Divider />
        <CustomDotGroup slides={3} />

    </CarouselProvider>
);

export default ImageCarousel;


