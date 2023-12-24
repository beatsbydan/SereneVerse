import React, {useRef, useState} from 'react'
import './SplashScreen.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useNavigate} from 'react-router-dom'
import SplashScreenLogo from '../../../../UI/SplashScreenLogo/SplashScreenLogo'
import SplashElements from './SplashElements/SplashElements';
import SplashElement from './SplashElement/SplashElement';

const SplashScreen = () => {
  const sliderRef = useRef<Slider>(null)
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
  const navigate = useNavigate()

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    afterChange: (currentSlide: number) => {
      const totalSlides = sliderRef.current?.innerSlider.state.slideCount;
      setIsLastSlide(currentSlide === totalSlides - 1);
    },
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
    if(isLastSlide){
      navigate('/start')
    }
  }

  return (
    <div className='splashCard'>
      <SplashScreenLogo/>
      <div className="slider">
        <Slider ref={sliderRef} {...settings}>
          {SplashElements.map((element, index)=>{
            return (
              <SplashElement 
                key={index} 
                index={index} 
                changeSplash={nextSlide} 
                splash={element}
              />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default SplashScreen