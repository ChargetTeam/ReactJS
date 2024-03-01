import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
    const modalClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={modalClassName}>
            <section className="modal-main">
                <button className='modal-close-button' type="button" onClick={handleClose}>
                    X
                </button>
                {children}
            </section>
        </div>
    );
};

export default Modal;