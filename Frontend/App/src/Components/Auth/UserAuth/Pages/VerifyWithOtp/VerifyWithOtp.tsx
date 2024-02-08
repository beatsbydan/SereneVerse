import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './VerifyWithOtp.css'
import OTPInput from 'react-otp-input'
import { FaArrowLeft } from 'react-icons/fa6'
import SplashScreenLogo from '../../../../../UI/SplashScreenLogo/SplashScreenLogo'
import Button from '../../../../../UI/Button/SplashButton/Button'

const VerifyWithOtp:React.FC = () => {
    const [otp, setOtp] = useState<string>('')
    const navigate = useNavigate()

    const handleSubmit = () => {

    }

    const handlePageChange = () => {
        navigate(-1)
    }
    return (
        <div className='splashCard'>
            <SplashScreenLogo/>
            <div className='authSplash'>
                <FaArrowLeft className="prevPage" size={20} onClick={handlePageChange} />
                <form className='login'>
                    <div className="otp--head">
                        <h1>OTP</h1>
                        <p>Please enter the <span>OTP</span> sent to your email.</p>
                    </div>
                    <div className="otp--main">
                        {/* <small classNAme="error">{otpError}</small> */}
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span>&nbsp; &nbsp; &nbsp; </span>}
                            renderInput={(props) => <input {...props} />}
                            skipDefaultStyles={true}
                            // inputStyle= {otpError ? "errorField" : ""}
                        />
                    </div>
                    <div className='otp--options'>
                        <p>Didn't receive an OTP?</p>
                        <Link to={'/forgot'}>Resend OTP</Link>
                    </div>
                    <div className="otp--actions">
                        <Button type={"button"} text={'Verify'} actionHandler={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerifyWithOtp