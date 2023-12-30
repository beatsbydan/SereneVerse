import React, {useState} from 'react'
import './ForgotPassword.css'
import {useNavigate, Link} from 'react-router-dom'
import SplashScreenLogo from '../../../../../UI/SplashScreenLogo/SplashScreenLogo'
import { FaArrowLeft } from 'react-icons/fa6'
import Input from '../../../../../UI/Input/AuthInput/Input'
import Button from '../../../../../UI/Button/SplashButton/Button'

const ForgotPassword:React.FC = () => {
    type InputType = {
        email: ''
    }
    type ErrorType = {
        email: ''
    }

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState<InputType>({
        email: ''
    })

    const [inputErrors, setInputErrors] = useState<ErrorType>({
        email: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target

        console.log(e.target)
        setInputValues( prev => {
            return (
                {...prev, [id]: value}
            )
        })
    }
    const handlePageChange = () => {
        navigate(-1)
    }
    return (
        <div className='splashCard'>
            <SplashScreenLogo/>
            <div className='authSplash'>
                <FaArrowLeft className="prevPage" size={20} onClick={handlePageChange} />
                <form onSubmit={handleSubmit} className='forgot'>
                    <div className="forgot--head">
                        <h1>Find your account</h1>
                        <p>Enter your email to find your account.</p>
                    </div>
                    <div className="forgot--main">
                        <Input
                            id={'loginEmail'}
                            type={'text'}
                            label={'Email'}
                            error={inputErrors.email}
                            value={inputValues.email}
                            placeholder={'Enter your email'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="forgot--actions">
                        <Button type={"submit"} text={'Next'} actionHandler={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword