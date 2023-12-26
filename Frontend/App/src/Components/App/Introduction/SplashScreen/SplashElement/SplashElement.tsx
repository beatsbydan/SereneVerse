import React from 'react'
import './SplashElement.css'
import SplashThumbnails from '../SplashThumbnails/SplashThumbnails'
import Button from '../../../../../UI/Button/SplashButton/Button'
import LazyImage from '../../../../../UI/LazyImage/LazyImage'

type SplashType = {
    url: string,
    header: string,
    splashText: string
}

type SplashElementType ={
    splash: SplashType,
    index: number,
    changeSplash: () => void
}

const SplashElement:React.FC<SplashElementType> = (props) => {
    
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
                    <Button type='button' text={"Continue"} actionHandler={props.changeSplash}/>
                </div>
            </div>
        </div>
    )
}

export default SplashElement