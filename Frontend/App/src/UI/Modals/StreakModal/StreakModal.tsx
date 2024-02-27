import React, { ReactNode, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import Button from '../../Button/AppButton/Button'

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

const StreakModal:React.FC<{children: ReactNode, isOpen: boolean, closeModal: ()=>void}> = (props) => {
  const [modalElement] = useState(document.createElement('div'))
    
    useEffect(()=>{
        document.body.appendChild(modalElement)

        return () => {
            document.body.removeChild(modalElement)
        }

    },[modalElement])

    return props.isOpen ?
        ReactDOM.createPortal(
            <React.Fragment>
              <div className="streakModal--bg" onClick={props.closeModal}></div>
              {props.children}
            </React.Fragment>
            ,
            modalElement
        )
        :
        null
}

const StreakStart:React.FC<
  {
    isOpen: boolean, 
    closeModal: ()=> void
  }> = (props) => {
    return(
      <StreakModal isOpen={props.isOpen} closeModal={props.closeModal}>
        <StreakUI/>
      </StreakModal>
    )
}

export default StreakStart
