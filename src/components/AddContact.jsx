import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';

const AddContact = (props) => {
  
  //object to store form data
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let {name, email, phone} = user;

  //handler function to update user info from the input field using onChange()
  const handleChange = (e) => {
    let {name, value} = e.target;
    setUser({...user, [name]: value});
  }
  //function to handle onSubmit()
  const handleSubmit = (e) => {
    e.preventDefault()
    // if(name === "" || email === "") {
    //   alert("All fields are required!");
    //   return;
    // }    
    //Call the updater method of parent element with current username and email 
    props.addContact(user);
    //Setting both input fields to be empty after form submission
    setUser({name: "", email: "", phone: ""});
    // console.log(user);
    toast.success("Contact saved!");
  }

  let navigate = useNavigate();
  let contactsPage = () => navigate("/");

  return (
    <>
      <div className='addContact-container'>

        <div className='contacts-header'>
          <div className='details-header'>
            <h3>Add Contact</h3>
          </div>          
          <button className='btn' onClick={contactsPage}>Contacts</button>
        </div>

        <form action="" className='form' onSubmit={handleSubmit}>
          <div className="inputs-container">

            <div className="top-input-container">
              <div className='name-container'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={name} required/>
              </div>
              
              <div className='email-container'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={email} required />
              </div>
            </div>

            <div className="bottom-input-container">
              <div className='contact-container'>
                <label htmlFor="phone">Contact</label>
                <input type="tel" name="phone" id="phone" onChange={handleChange} value={phone} required />
              </div>

              <div className="form-btn-container">
                <button className='add-btn'>Save</button> 
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

export default AddContact