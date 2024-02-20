import React, {useState} from 'react'
import './Register.css'
import SplashScreenLogo from '../../../../../UI/SplashScreenLogo/SplashScreenLogo'
import { FaArrowLeft } from "react-icons/fa6";
import Input from '../../../../../UI/Input/AuthInput/Input'
import CheckBox from '../../../../../UI/CheckBox/CheckBox'
import Button from '../../../../../UI/Button/SplashButton/Button'
import {Link, useNavigate} from 'react-router-dom'
import ThirdPartyAuth from '../../../ThirdPartyAuth/ThirdPartyAuth';

const Register: React.FC = () => {
    type InputType = {
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        dateOfBirth: ''
    }
    type ErrorType = {
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        dateOfBirth: ''
    }

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState<InputType>({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        dateOfBirth: ''
    })

    const [inputErrors, setInputErrors] = useState<ErrorType>({
        name: '',
        email: '',
        password:'',
        phoneNumber: '',
        dateOfBirth: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setInputValues({...inputValues, [name]: value})
    }
    const handlePageChange = () => {
        navigate(-1)
    }
    return (
        <div className='splashCard'>
            <SplashScreenLogo/>
            <div className='authSplash'>
                <FaArrowLeft className="prevPage" size={20} onClick={handlePageChange} />
                <form onSubmit={handleSubmit} className='register'>
                    <div className="register--head">
                        <h1>Register</h1>
                        <p>Create an account with <span>MoodMentor</span></p>
                    </div>
                    <div className="register--main">
                        <Input
                            name={'name'}
                            type={'text'}
                            label={'Full name'}
                            error={inputErrors.name}
                            value={inputValues.name}
                            placeholder={'Enter your name'}
                            onChange={handleChange}
                        />
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
                        <Input
                            name={'phoneNumber'}
                            type={'text'}
                            label={'Phone number'}
                            error={inputErrors.phoneNumber}
                            value={inputValues.phoneNumber}
                            placeholder={'Phone number'}
                            onChange={handleChange}
                        />
                        <Input
                            name={'dateOfBirth'}
                            type={'date'}
                            label={'Date of Birth'}
                            error={inputErrors.dateOfBirth}
                            value={inputValues.dateOfBirth}
                            placeholder={''}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='register--options'>
                        <CheckBox text={""}/>
                        <Link to="policyAgreement">
                            I Agree with Terms and Policy
                        </Link>
                    </div>
                    <div className="register--actions">
                        <Button type={"submit"} text={'Sign Up'} actionHandler={handleSubmit}/>
                    </div>
                    <div className="auxiliaryAuth">
                        <h4>Or</h4>
                        <ThirdPartyAuth/>
                    </div>
                    <p className='toLogin'>Already have an account? <span><Link to={"/login"}>Log In</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default Register