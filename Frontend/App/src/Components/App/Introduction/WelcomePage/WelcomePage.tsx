import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './WelcomePage.css'
import logo from '../../../../Assets/images/logo.svg'

const WelcomePage: React.FC = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/welcome')
    },3000)
  })
  return (
    <div className="welcome">
      <div className="welcomePage">
        <img src={logo} alt="logo" />
        <h1>MoodMentor</h1>
        <p>
          Welcome to MoodMentor, your safe space for healing and 
          personal growth
        </p>
      </div>
    </div>
  )
}

export default WelcomePage