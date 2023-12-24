import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.actionHandler} className='customButton'>
            {props.text}
        </button>
    )
}

export default Button