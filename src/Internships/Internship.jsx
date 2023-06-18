import React from 'react';
import './internship.css';
import kickstart from '../assests/kickstart.jpg';
import GWL from '../assests/GWL.jpg';
import certi from '../assests/certi.jpg';

const Internship = () => {
    const data = [
        { id: 1, img: kickstart, title: "kickstart Certificate" },
        { id: 2, img: GWL, title: "Geek Week Hackathon" },
        { id: 2, img: certi, title: "Flipkart Grid 4.0" },
    ]
    return (
        <div className='intern_container' id='Internship'>
            <div className='intern_head'>
                <span>Personal Achievements</span>
            </div>
            <div className='intern_wrap' style={{ position: 'relative' }}>
                {data.map((value, i) => (
                    <div className='intern_details'>
                        <div className='intern_img'>
                            <img src={value.img} alt="internship" />
                        </div>
                        <span>{value.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Internship