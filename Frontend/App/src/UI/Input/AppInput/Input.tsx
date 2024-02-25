import React from 'react'
import './Input.css'

type InputType = {
    name: string,
    type: string,
    label: string,
    error: string,
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input:React.FC<InputType> = (props) => {
    return (
        <div className='appInputElement'>
            <label htmlFor={props.name}>
                {props.label}
                <small className='error'>{props.error}</small>
            </label>
            <input 
                type={props.type} 
                value={props.value} 
                name={props.name}
                placeholder={props.placeholder} 
                onChange={props.onChange}
                className={props.error ? 'errorField' : ''} 
            />
        </div>
    )
}

export default Input