// Internet.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Package from '../components/Package';
import './contact.css';


const Contact = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [price, setPrice] = useState(0);
    const [isInputVisible, setInputVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate()

    return (
        <div className='charge-screen'>
            <div className='contact-container'>
                <div className='address'>آدرس</div>
                <div className='phone'>تلفن</div>
            </div>
        </div>

    );
};


export default Contact;


