import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    const [currentItem, setCurrentItem] = useState('خرید اینترنت');
    // useEffect(() => {
    //     setCurrentItem('خرید اینترنت')
    // })



    const handleClick = (item) => {
        if (item === 'خرید اینترنت') {
            navigate("/");
        } else if (item === 'خرید شارژ') {
            navigate('/charge');
        } else {
            navigate('/contact');
        }
        setCurrentItem(item);
    }

    return (
        <div className='navbar-container'>
            <img
                src={require('../img/logo-fa.png')}
                alt="Logo"
                className='navbar-logo'
            />
            <div className='navbar-items-container'>

                <li onClick={() => handleClick('خرید اینترنت')} className={currentItem === 'خرید اینترنت' ? 'setItem navbar-item' : 'navbar-item'}>خرید اینترنت</li>

                <li onClick={() => handleClick('خرید شارژ')} className={currentItem === 'خرید شارژ' ? 'setItem navbar-item' : 'navbar-item'}>خرید شارژ</li>

                <li onClick={() => handleClick('تماس با ما')} className={currentItem === 'تماس با ما' ? 'setItem navbar-item' : 'navbar-item'}>تماس با ما</li>
            </div>

        </div>
    );
};



export default Navbar;
