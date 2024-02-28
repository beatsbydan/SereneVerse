import React from 'react'
import Modal from '../Modal'
import './CommentModal.css'

const CommentUI:React.FC = () =>{
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
            <CommentUI/>
        </Modal>
    )
}

export default Comment