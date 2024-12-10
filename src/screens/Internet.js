import React, { useState, useEffect } from 'react';
import Package from '../components/Package';
import '../components/package.css';
import axios, { isCancel, AxiosError } from 'axios';

const Internet = () => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8003/api/operator/internet/mci');
                console.log("response:", response.data.data);
                setOptions(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                console.log("final");;
            }
        };

        fetchData();
    }, []);

    const [backgroundImage, setBackgroundImage] = useState('banner.png');
    const [heightImage, setHeightImage] = useState('550px');

    useEffect(() => {
        const updateBanner = () => {
            if (window.innerWidth < 700) {
                setBackgroundImage('banner2.png');
                setHeightImage('400px');
            } else {
                setBackgroundImage('banner.png');
                setHeightImage('550px');
            }
        };

        updateBanner();
        window.addEventListener('resize', updateBanner);
        return () => window.removeEventListener('resize', updateBanner);
    }, []);


    return (
        <div className="internet-page">
            <div
                className="banner"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    marginTop: "60px",
                    height: heightImage,
                    marginBottom: "-70px",
                }}
            ></div>

            {/* Grid container */}
            <div className="grid-container">
                {options.map((option, index) => (
                    <div className="grid-item" key={index}>
                        <Package pkg={option} />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Internet;
