import React from 'react'
import './Button.css'

type ButtonType = {
    text: string, 
    type: "submit" | "button" | "reset" | undefined,
    actionHandler: (e: React.FormEvent) => void
}

const fallBackFunction = () => {
    return
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <button type={props.type} onClick={props.type === "button" ? props.actionHandler : fallBackFunction} className='customButton'>
            {props.text}
        </button>
    )
}

export default Button