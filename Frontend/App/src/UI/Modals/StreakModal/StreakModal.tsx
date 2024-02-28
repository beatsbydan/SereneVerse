import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../Button/AppButton/Button'
import Modal from '../Modal'

const StreakUI:React.FC<{}> = (props) => {
  const [streakName, setStreakName] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreakName(e.target.value);
  }

  return(
    <div className="streakUI">
      <div className="streakUi--head"></div>
      <input 
        type="text" 
        name='streakName' 
        value={streakName}
        placeholder="Enter what you're abstaining from" 
        onChange={handleChange}
      />
      <Button
        text="Start streak"
        actionHandler={()=>{}}
      />
    </div>
  )
}

const StreakStart:React.FC<
  {
    isOpen: boolean, 
    closeModal: ()=> void
  }> = (props) => {
    return(
      <Modal isOpen={props.isOpen} closeModal={props.closeModal}>
        <StreakUI/>
      </Modal>
    )
}

export default StreakStart
