import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const Modal = ({ handleClose, show, children }) => {
        const navigate = useNavigate();
        const modalClassName = show ? 'modal display-block' : 'modal display-none';

        return (
            <div className={modalClassName}>
                <section className="modal-main success">

                    {children}
                    <img
                        src={require('../img/logo-fa.png')}
                        alt="Logo"
                        className='navbar-logo'
                    />
                    <button className='return-button' type="button" onClick={() => navigate('/')}>
                        بازگشت به صفحه اصلی
                    </button>
                </section>
            </div>
        );
    }



    return (
        <div className='success-container'>

            <Modal show={showModal} handleClose={handleCloseModal}>
                <img

                    // /Users/sara/Desktop/Charget/chargetnet/src/img/icons/icons8-success-48.png
                    src={require('../img/icons/icons8-success/icons8-success-500.png')}
                    alt="Logo"
                    className='success-logo'
                />

                <div>خرید شما با موفقیت انجام شد</div>

            </Modal>

        </div>
    )
}

export default Success;