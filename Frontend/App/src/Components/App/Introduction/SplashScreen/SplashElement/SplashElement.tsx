import React from 'react'
import './SplashElement.css'
import LazyImage from '../../../../../UI/LazyImage/LazyImage'

type SplashType = {
    url: string,
    header: string,
    splashText: string
}

type SplashElementType ={
    splash: SplashType
}

const SplashElement:React.FC<SplashElementType> = (props) => {
    
    return (
        <div className='splashElement'>
            <div className="splashBlock">
                <LazyImage src={props.splash.url} alt="splashImg" />
                <h4>{props.splash.header}</h4>
                <p>{props.splash.splashText}</p>
            </div>
        </div>
    )
}

export default SplashElement