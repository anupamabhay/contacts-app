import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const EditContact = (props) => {

    //Accepting location object from ContactCard.jsx. The 'state' prop of location object contains the data of a specific user.
    const location = useLocation();
    let {id, email, name, phone} = location.state;

    //Create a state variable to store the data received as the 'location' object.
    const [user, setUser] = useState({
        id,
        name,
        email,
        phone,
    });

    //handler function for onChange event
    const handleChange = (e) => {
        let {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    //handler function for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //Calling the updater (updateContact()) function of parent element with current username and email in order to update it on the server
        props.updateContact(user);

        toast.success("Contact updated!");
    }

    let navigate = useNavigate();
    let contactsPage = () => navigate("/");

    return (
        <>
          <div className='addContact-container'>
    
            <div className='contacts-header'>
              <div className='details-header'>
                <h3>Edit Contact</h3>
              </div>          
              <button className='btn' onClick={contactsPage}>Contacts</button>
            </div>
    
            <form action="" className='form' onSubmit={handleSubmit}>
              <div className="inputs-container">
    
                <div className="top-input-container">
                  <div className='name-container'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={user.name} required/>
                  </div>
                  
                  <div className='email-container'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={user.email} required />
                  </div>
                </div>
    
                <div className="bottom-input-container">
                  <div className='contact-container'>
                    <label htmlFor="phone">Contact</label>
                    <input type="tel" name="phone" id="phone" onChange={handleChange} value={user.phone} required />
                  </div>
    
                  <div className="form-btn-container">
                    <button className='add-btn'>Update</button> 
                  </div>
                </div>          
                
              </div>
            </form>
    
            <Toaster 
              containerStyle={{
                left: '50%',
                position: 'relative',
                transform: 'translate(-50%, 0px)',
                zIndex: '9999',
              }}
            />
    
          </div>    
        </>
    )
}

export default EditContact