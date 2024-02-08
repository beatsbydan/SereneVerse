import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './ResetPassword.css'
import SplashScreenLogo from '../../../../../UI/SplashScreenLogo/SplashScreenLogo'
import { FaArrowLeft } from 'react-icons/fa6'
import Input from '../../../../../UI/Input/AuthInput/Input'
import Button from '../../../../../UI/Button/SplashButton/Button'

const ResetPassword:React.FC = () => {
    type InputType = {
        newPassword: '',
        confirmPassword: ''
    }
    type ErrorType = {
        newPassword: '',
        confirmPassword: ''
    }

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState<InputType>({
        newPassword: '',
        confirmPassword: ''
    })

    const [inputErrors, setInputErrors] = useState<ErrorType>({
        newPassword: '',
        confirmPassword: ''
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
                <form onSubmit={handleSubmit} className='reset'>
                    <div className="login--head">
                        <h1>Welcome Back!</h1>
                        <p>Sign in to <span>MoodMentor</span></p>
                    </div>
                    <div className="reset--main">
                        <Input
                            id={'newPassword'}
                            type={'password'}
                            label={'New Password'}
                            error={inputErrors.newPassword}
                            value={inputValues.newPassword}
                            placeholder={'New Password'}
                            onChange={handleChange}
                        />
                        <Input
                            id={'confirmPassword'}
                            type={'password'}
                            label={'Confirm Password'}
                            error={inputErrors.confirmPassword}
                            value={inputValues.confirmPassword}
                            placeholder={'Confirm Password'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='reset--options'>
                        {/* <CheckBox text={"Remember me"}/> */}
                        <Link to={"/forgot"}>Forgotten password? Reset</Link>
                    </div>
                    <div className="reset--actions">
                        <Button type={"submit"} text={'Reset'} actionHandler={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword