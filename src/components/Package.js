import { useState } from 'react';
import logo from '../img/512-512.png';
import './package.css';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';


const Package = ({ id, simcard, title, type, capacity, duration, price }) => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [productID, setProductID] = useState();

    const handlePhoneChange = (event) => {
        const newPhoneNumber = event.target.value;
        setPhone(newPhoneNumber);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePurchase = () => {
        navigate('/success');
        setProductID(id);
    }



    return (
        <div className='package-container'>
            <div className='header-container'>
                <div>
                    <h3>{title}</h3>
                    <span className='sim-type'>{type}</span>
                </div>
                {simcard === 'HamraheAval' ? <img src={logo} /> : <></>}
            </div>

            <div className='package-detail'>
                <div>{capacity}</div>
                <div>{duration}</div>
            </div>

            <div className='package-price'>{price} تومان</div>
            <button className='purchase-button' onClick={handleOpenModal}>انتخاب بسته</button>

            <Modal show={showModal} handleClose={handleCloseModal}>
                <h2 className='modal-header'>خرید بسته اینترنتی</h2>
                <div className='detail-container'>
                    <div className='internet-title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='internet-items'>
                        <p className='right-p'>نوع سیمکارت</p>
                        <p className='left-p'>{type}</p>
                    </div>
                    <div className='internet-items'>
                        <p className='right-p'>مدت زمان بسته</p>
                        <p className='left-p'>{duration}</p>
                    </div>
                    <div className='internet-items'>
                        <p className='right-p'>حجم بسته</p>
                        <p className='left-p'>{capacity}</p>
                    </div>
                    <div className='internet-items'>
                        <p className='right-p'>قیمت بسته</p>
                        <p className='left-p'>{price} تومان</p>
                    </div>

                    <div className='container-input '>
                        <div className='charge-detail modal-input'>شماره تلفن همراه</div>

                        <input className='charge-input'
                            placeholder="۰۹ _ _ _ _ _ _ _ _ _"
                            onChange={(event) => handlePhoneChange(event)}
                            value={phone} />
                    </div>
                    <div className='container-input '>
                        <div className='charge-detail email modal-input'>آدرس ایمیل (اختیاری)</div>

                        <input className='charge-input email'
                            placeholder="example@example.com"
                            onChange={(e) => handleEmailChange(e)}
                            value={email} />
                    </div>
                    <button className='purchase-button modal-buy' onClick={() => handlePurchase()}>خرید</button>

                </div>
            </Modal>

        </div>
    )
}
export default Package;
