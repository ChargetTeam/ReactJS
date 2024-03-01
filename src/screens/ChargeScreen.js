// Internet.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './charge.css';


const ChargeScreen = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [price, setPrice] = useState(0);
    const [isInputVisible, setInputVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ['۵۰۰۰۰ ریال', '۷۰۰۰۰ ریال', '۱۰۰۰۰۰ ریال', '۲۰۰۰۰۰ ریال', '۵۰۰۰۰۰ ریال', 'مبلغ دلخواه'];


    const handlePhoneChange = (event) => {
        const newPhoneNumber = event.target.value;
        setPhone(newPhoneNumber);
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };

    const handleOption = async (text) => {
        if (text === 'مبلغ دلخواه') {
            setInputVisible(!isInputVisible)
        }
        setPrice(text);
    };


    return (
        <div className='charge-screen'>
            <div className='container-page' >
                <header className='charge-header'>خرید شارژ همراه اول</header>
                <div className='text-container'>
                    <div className='container-input'>
                        <div className='charge-detail'>شماره تلفن همراه</div>

                        <input className='charge-input'
                            placeholder="۰۹ _ _ _ _ _ _ _ _ _"
                            onChange={(event) => handlePhoneChange(event)}
                            value={phone} />
                    </div>
                    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <image
                            source={require('../img/1100-400.png')}
                            style={{ height: 55 }}
                            resizeMode="contain"
                        />
                    </div>

                    <div className='container-input'>
                        {options.map((option, index) => (
                            <button
                                className='charge-button'
                                key={index}
                            >
                                <div onClick={() => handleOption(option)}
                                >
                                    {option}
                                </div>
                            </button>
                        ))}
                        {isInputVisible &&

                            <input className='charge-input' placeholder='مبلغ شارژ را به ریال وارد کنید'
                                onChange={(e) => setPrice(e.target.value)}

                                style={styles.inputPrice} />}
                    </div>

                    <div className='container-input'>
                        <div className='charge-detail email'>آدرس ایمیل (اختیاری)</div>

                        <input className='charge-input email'
                            placeholder="example@example.com"
                            onChange={(e) => handleEmailChange(e)}
                            value={email} />
                    </div>
                </div>
                <button type='submit' className='purchase-charge-button' >
                    <div style={styles.buttonText} onClick={() => navigate('/success')} >خرید شارژ</div>
                </button>
            </div>

        </div>

    );
};



const styles = {
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleContainer: {
        padding: 15,
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: '#aaa',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 17,
        marginTop: 0,
        marginBottom: 10,
    },
    info: {
        borderWidth: .51,
        borderColor: '#ccc',
        borderRadius: 100,
        backgroundColor: '#eee',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 15,
        padding: 2.67,
        fontSize: 16
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        paddingTop: 2,
    },

    buttonText: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
    },
    inputPrice: {
        height: 40,
        borderWidth: .51,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#fafafa',
        display: 'block',
        margin: 'auto',
    },
    containerButton: {
        paddingTop: 7.67,
    },
    selected: {
        backgroundColor: '#EEBE58',
        color: '#fff',
        padding: 7,
        fontWeight: 'bold'
    },
};

export default ChargeScreen;
