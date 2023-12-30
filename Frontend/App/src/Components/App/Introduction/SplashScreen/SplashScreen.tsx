import React, {useState} from 'react'
import './SplashScreen.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useNavigate} from 'react-router-dom'
import SplashScreenLogo from '../../../../UI/SplashScreenLogo/SplashScreenLogo'
import SplashElements from './SplashElements/SplashElements';
import SplashElement from './SplashElement/SplashElement';
import SplashThumbnails from './SplashThumbnails/SplashThumbnails';
import Button from '../../../../UI/Button/SplashButton/Button';

const SplashScreen:React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const navigate = useNavigate()

  const nextSlide = () => {
    if (currentSlide !== SplashElements.length - 1){
      setCurrentSlide(prev => prev + 1)
    }
    else{
      navigate('/start')
    }
  }
  
  const getSlide = (value: number) => {
    setCurrentSlide(value)
  }
  return (
    <div className='splashCard'>
      <SplashScreenLogo/>
      <div className="slider">
        <div className="mainSplash">
          <SplashElement splash={SplashElements[currentSlide]}/>
          <SplashThumbnails index={currentSlide} changeSlide={getSlide}/>
          <div className="slider--actions">
            <Button type='button' text={"Continue"} actionHandler={nextSlide}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen