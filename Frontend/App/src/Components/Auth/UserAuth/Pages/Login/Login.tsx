import React, { useState } from 'react'
import SplashScreenLogo from '../../../../../UI/SplashScreenLogo/SplashScreenLogo'
import { FaArrowLeft } from 'react-icons/fa6'
import Button from '../../../../../UI/Button/SplashButton/Button'
import './Login.css'
import Input from '../../../../../UI/Input/AuthInput/Input'
import CheckBox from '../../../../../UI/CheckBox/CheckBox'
import { Link, useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
    type InputType = {
        email: '',
        password: ''
    }
    type ErrorType = {
        email: '',
        password: ''
    }

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState<InputType>({
        email: '',
        password: ''
    })

    const [inputErrors, setInputErrors] = useState<ErrorType>({
        email: '',
        password:''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        console.log(e.target)
        setInputValues( prev => {
            return (
                {...prev, [name]: value}
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
                <form onSubmit={handleSubmit} className='login'>
                    <div className="login--head">
                        <h1>Welcome Back!</h1>
                        <p>Sign in to <span>MoodMentor</span></p>
                    </div>
                    <div className="login--main">
                        <Input
                            name={'email'}
                            type={'text'}
                            label={'Email'}
                            error={inputErrors.email}
                            value={inputValues.email}
                            placeholder={'Enter your email'}
                            onChange={handleChange}
                        />
                        <Input
                            name={'password'}
                            type={'password'}
                            label={'Password'}
                            error={inputErrors.password}
                            value={inputValues.password}
                            placeholder={'Password'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='login--options'>
                        <CheckBox text={"Remember me"}/>
                        <Link to={"/forgot"}>Forgotten password? Reset</Link>
                    </div>
                    <div className="login--actions">
                        <Button type={"submit"} text={'Log in'} actionHandler={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login