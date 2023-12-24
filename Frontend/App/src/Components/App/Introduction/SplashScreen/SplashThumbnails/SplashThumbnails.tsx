import React from 'react'
import './SplashThumbnails.css'
import SplashElements from '../SplashElements/SplashElements'

const SplashThumbnails: React.FC<{index: number}> = (props) => {
    return (
        <ul className='splashThumbNails'>
            {SplashElements.map((element, index)=>{
                return (
                    <li key={index} className={props.index === index ? "splashThumbNail currentThumbNail": "splashThumbNail"}/>
                )
            })}
        </ul>
    )
}

export default SplashThumbnails