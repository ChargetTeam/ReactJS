import React, { useState, useEffect } from 'react';
import Package from '../components/Package';
import '../components/package.css'

const Internet = () => {

    const options = [
        {
            'id': '1',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۲۰ تومان',

        },
        {
            'id': '2',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '3',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '4',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '5',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۲۰ تومان',

        },
        {
            'id': '6',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '7',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '8',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '9',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۲۰ تومان',

        },
        {
            'id': '10',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '11',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },
        {
            'id': '12',
            'title': 'بسته ۵ روزه ۲ تا ۷ صبح',
            'cimcard': 'همراه اول',
            'type': 'سیمکارت اعتباری',
            'capacity': '۵ گیگابایت',
            'duration': '۱۰ روزه',
            'price': '۲۰۵۰ تومان'

        },

    ]


    return (
        <div className='internet-page'>
            <div className='grid-container'>
                {options.map((option, index) => (
                    <div className='grid-item' key={index}>
                        <Package
                            id={option.id}
                            cimcard={option.cimcard}
                            title={option.title}
                            type={option.type}
                            capacity={option.capacity}
                            duration={option.duration}
                            price={option.price}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}


export default Internet;
