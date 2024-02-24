import React from 'react'
import './Button.css'

const Button:React.FC<{text: string, actionHandler: () => void}> = (props) => {
  return (
    <button type='button' className='appButton' onClick={props.actionHandler}>{props.text}</button>
  )
}

export default Button