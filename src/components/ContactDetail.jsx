import React from 'react';
import pfp from '../assets/pfp.png';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactDetail = () => {

    let location = useLocation();
    let {id, name, email, phone} = location.state;

    const navigate = useNavigate();
    let back = () => navigate(-1);

    return (
        <div className='contact-detail-container'>
            <div className="contacts-header">
                <div className='details-header'>
                    <h3>User Profile</h3>
                </div>
                <button className='btn' onClick={back}>BACK</button>
            </div>
            <div className="details">
                <div className="pfp-container">
                    <img className='profile-image' src={pfp} alt="user-image" />
                </div>
                <div className="contact-detail">
                    <div className="contact-detail-content">
                        
                        <div className="user-name-container">
                            <div className='name-header'>NAME</div>
                            <div className="name-detail">{name}</div>
                        </div>

                        <div className="user-email-container">
                            <div className='email-header'>EMAIL</div>
                            <div className="email-detail">{email}</div>
                        </div>
                        
                        <div className="user-phone-container">
                            <div className='phone-header'>PHONE</div>
                            <div className="phone-detail">{phone}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail;