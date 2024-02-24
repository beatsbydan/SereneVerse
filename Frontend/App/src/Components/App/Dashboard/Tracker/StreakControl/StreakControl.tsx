import React from 'react'
import Button from '../../../../../UI/Button/AppButton/Button'
import start from '../../../../../Assets/icons/start-streak.svg'
import end from '../../../../../Assets/icons/end-streak.svg'
import restart from '../../../../../Assets/icons/restart-streak.svg'
import streak from '../../../../../Assets/icons/streak.svg'
import './StreakControl.css'

const StreakElements = [
    {
        type: 'Start',
        desc: 'Start a new abstinence streak today!',
        url: start,
        actionHandler: ()=>{}
    },
    {
        type: 'End',
        desc: 'End an existing abstinence streak.',
        url: end,
        actionHandler: ()=>{}
    },
    {
        type: 'Restart',
        desc: 'Restart a new abstinence streak that has ended.',
        url: restart,
        actionHandler: ()=>{}
    },
]


const StreakControl:React.FC = () => {
    return (
        <ul className='streakControl'>
            {
                StreakElements.map((value, index)=>{
                    return (
                        <li key={index} className='streakSetting'>
                            <div className="streakSettingDesc">
                                <img src={streak} alt="streak" />
                                <h4>{value.desc}</h4>
                                <img src={value.url} alt={value.type} />
                            </div>
                            <Button
                                text={`${value.type} streak`}
                                actionHandler={value.actionHandler}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default StreakControl