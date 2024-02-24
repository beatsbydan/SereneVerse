import React, { ReactNode } from 'react'
import './Card.css'

const Card:React.FC<{desc: string, children: ReactNode}> = (props) => {
    return (
        <div className='streakCard'>
            <div className="steakCard--header">
                <div className="streakCard--title">
                    <h4>{props.desc}</h4>
                </div>
            </div>
            <div className="streakCard--body">
                {props.children}
            </div>
        </div>
    )
}

export default Card