import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toPersianDigits } from '../utils/PersianDigit';
import Modal from "./shared/Modal";

const PurchaseModal = ({
    show,
    handleClose,
    pkg,
    phone,
    email,
    setPhone,
    setEmail,
    subTypeMappingTime,
    subTypeMappingTraffic,
}) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };



    const handlePurchase = async () => {
        const apiUrl = "http://localhost:8003/api/package/check"; // Use your backend endpoint

        const payload = {
            operator: "mtn",
            tel_num: phone,
            tel_charger: phone,
            package: pkg || "",

        };

        console.log("payload:", payload);

        try {
            const response = await axios.post(apiUrl, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                navigate("/success");
            } else {
                console.error("API call failed with response: ", response);
            }
        } catch (error) {
            setErrorMessage(error);
            console.error("Error while calling the API: ", error);
        }
    };

    return (
        <Modal show={show} handleClose={handleClose}>
            <h2 className="modal-header">خرید بسته اینترنتی</h2>
            <div className="detail-container">
                <div className="internet-title">
                    <h3>{toPersianDigits(pkg.description)}</h3>
                </div>
                <div className="internet-items">
                    <p className="right-p">نوع سیمکارت</p>
                    <p className="left-p">همراه اول</p>
                </div>
                <div className="internet-items">
                    <p className="right-p">مدت زمان بسته</p>
                    <p className="left-p">
                        {toPersianDigits(pkg.duration?.category?.value) || "N/A"} {subTypeMappingTime[pkg.duration?.category?.sub_type] || ""}
                    </p>
                </div>
                <div className="internet-items">
                    <p className="right-p">حجم بسته</p>
                    <p className="left-p">
                        {toPersianDigits(pkg.traffic?.category?.value) || toPersianDigits(pkg.in_network_conversation?.category?.value)} {subTypeMappingTraffic[pkg.traffic?.category?.sub_type] || ""}
                    </p>
                </div>
                <div className="internet-items">
                    <p className="right-p">قیمت بسته</p>
                    <p className="left-p">{toPersianDigits(pkg.cost)}‌ ریال</p>
                </div>

                <div className="container-input ">
                    <div className="charge-detail modal-input">شماره تلفن همراه</div>
                    <input
                        className="charge-input"
                        placeholder="۰۹ _ _ _ _ _ _ _ _ _"
                        onChange={handlePhoneChange}
                        value={phone}
                        required
                    />
                </div>
                <div className="container-input ">
                    <div className="charge-detail email modal-input">آدرس ایمیل (اختیاری)</div>
                    <input
                        className="charge-input email"
                        placeholder="example@example.com"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <button className="purchase-button modal-buy" onClick={handlePurchase}>
                    خرید
                </button>

            </div>
        </Modal>
    );
};

export default PurchaseModal;
