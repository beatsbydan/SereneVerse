import React from 'react'
import logo from '../../Assets/images/logo.svg'
import './SplashScreenLogo.css'

const SplashScreenLogo = () => {
    return (
        <div className='splashScreenLogo'>
            <img src={logo} alt="logo" />
            <h2>MoodMentor</h2>
        </div>
    )
}

export default SplashScreenLogo