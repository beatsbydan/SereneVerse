import React from 'react'
import './Start.css'
import SplashScreenLogo from '../../../../../UI/SplashScreenLogo/SplashScreenLogo'
import logo from '../../../../../Assets/images/logo-green.svg'
import { Link } from 'react-router-dom'

const Start:React.FC = () => {
    return (
        <div className='splashCard'>
            <SplashScreenLogo/>
            <div className='authSplash'>
                <div className="authStart">
                    <div className='authStart--head'>
                        <img src={logo} alt="logo" />
                        <h2>SereneVerse</h2>
                    </div>
                    <div className='authStart--main'>
                        <h2>Let’s get started!</h2>
                        <p>
                            This is where your healing begins. 
                            Through private and secure conversations.
                        </p>
                    </div>
                    <div className='authStart--actions'>
                        <Link to={'/login'}>Log in</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start