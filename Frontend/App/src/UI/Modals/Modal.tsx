import React, {useEffect, ReactNode, useState} from 'react'
import ReactDOM from 'react-dom'

const Modal:React.FC<{children: ReactNode, isOpen: boolean, closeModal: ()=>void}> = (props) => {
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

export default Modal