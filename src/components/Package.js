import { useState } from 'react';
import logo from '../img/512-512.png';
import './package.css';
import { toPersianDigits } from '../utils/PersianDigit';
import PurchaseModal from './PurchaseModal';
import { subTypeMappingTime } from '../utils/PersianTime';
import { subTypeMappingTraffic } from '../utils/PersianTraffic';

const Package = ({ pkg }) => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='package-container'>
            <div className='header-container'>
                <div>
                    <h3>{toPersianDigits(pkg.description)}</h3>
                </div>
                <img src={logo} alt="Package Logo" />
            </div>

            <div className='package-detail'>
                <div>
                    {toPersianDigits(pkg.traffic?.category?.value) ||
                        toPersianDigits(pkg.in_network_conversation?.category?.value)}{" "}
                    {subTypeMappingTraffic[pkg.traffic?.category?.sub_type] || ""}
                </div>
                <div>
                    {toPersianDigits(pkg.duration?.category?.value) || "N/A"}{" "}
                    {subTypeMappingTime[pkg.duration?.category?.sub_type] || ""}
                </div>
            </div>

            <div className='package-price'>{toPersianDigits(pkg.cost)}‌ ریال</div>
            <button className='purchase-button' onClick={handleOpenModal}>
                انتخاب بسته
            </button>

            <PurchaseModal
                show={showModal}
                handleClose={handleCloseModal}
                pkg={pkg}
                phone={phone}
                email={email}
                setPhone={setPhone}
                setEmail={setEmail}
                subTypeMappingTime={subTypeMappingTime}
                subTypeMappingTraffic={subTypeMappingTraffic}
            />
        </div>
    );
};

export default Package;
