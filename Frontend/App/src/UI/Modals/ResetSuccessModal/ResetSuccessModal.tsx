import React from 'react'
import Modal from '../Modal'
import './resetSuccessModal.css'

const ResetSuccessUI:React.FC = () =>{
    return (
        <div className="commentUI">

        </div>
    )
}

const Comment:React.FC<
    {
    isOpen: boolean, 
    closeModal: ()=> void
    }> = (props) => {
    return(
        <Modal isOpen={props.isOpen} closeModal={props.closeModal}>
            <ResetSuccessUI/>
        </Modal>
    )
}

export default Comment