import React from 'react';
import './modal.css';
import { IoMdClose } from "react-icons/io";

const Modal = ({ handleClose, show, children }) => {
    const modalClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={modalClassName}>
            <section className="modal-main">
                <button className='modal-close-button' type="button" onClick={handleClose}>
                    <IoMdClose size={20} />
                </button>
                {children}
            </section>
        </div>
    );
};

export default Modal;