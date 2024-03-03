import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    const [currentItem, setCurrentItem] = useState('خرید اینترنت');


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


    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <>
            <div className="topnav" id="myTopnav">
                <img
                    src={require('../img/logo-fa.png')}
                    alt="Logo"
                    className='navbar-logo'
                />
                <a onClick={() => handleClick('خرید اینترنت')} className={currentItem == 'خرید اینترنت' ? 'active' : ''}>خرید اینترنت</a>
                <a onClick={() => handleClick('خرید شارژ')} className={currentItem == 'خرید شارژ' ? 'active' : ''}>خرید شارژ</a>
                {/* <a onClick={() => handleClick('تماس با ما')} className={currentItem == 'تماس با ما' ? 'active' : ''}>تماس با ما</a> */}
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>

        </>

    );
};



export default Navbar;
