import React from 'react'
import google from '../../../Assets/images/google.svg'
import './ThirdPartyAuth.css'

const ThirdPartyAuth: React.FC = () => {
    return (
        <div className='thirdPartyAuth'>
            <img src={google} alt="google" />
        </div>
    )
}

export default ThirdPartyAuth