import React from 'react'
import './SplashElement.css'
import SplashThumbnails from '../SplashThumbnails/SplashThumbnails'
import Button from '../../../../../UI/Button/SplashButton/Button'
import LazyImage from '../../../../../UI/LazyImage/LazyImage'

type splash = {
    url: string,
    header: string,
    splashText: string
}

const SplashElement:React.FC<{splash: splash, index: number, changeSplash: () => void}> = (props) => {
    
    return (
        <div className='splashElement'>
            <div className="mainSplash">
                <div className="splashBlock">
                    <LazyImage src={props.splash.url} alt="splashImg" />
                    <h4>{props.splash.header}</h4>
                    <p>{props.splash.splashText}</p>
                </div>
                <SplashThumbnails index={props.index}/>
                <div className='splashActions'>
                    <Button text={"Continue"} actionHandler={props.changeSplash}/>
                </div>
            </div>
        </div>
    )
}

export default SplashElement