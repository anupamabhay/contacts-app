import React from 'react';
import user from '../assets/user.png';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {

  //Destructuring the properties of the 'contact' object and the deleteContact() function received as prop
  const {id, name, email, phone} = props.contact;
  const deleteContact = props.deleteContact;

  return (
    <>
      <div className='list-item'>

        <Link className="user-container" to={`/contact/${id}`} state={props.contact}>        
          <div className="user">
            <img src={user} alt="user" className='user-img' />
            
            <div className="user-details">
              <div className="username">{name}</div>
              <div>{email}</div>
            </div>          
          </div>
        </Link>
        
        <Link to={`/edit`} state={props.contact}>
          <div className='edit-btn-container'>
            <i className='edit alternate outline icon edit-btn'></i>
          </div>
        </Link>

        <div className='del-btn-container'>
          <i className='trash alternate outline icon del-btn' onClick={() => deleteContact(id)} ></i>
        </div>

      </div>
    </>
  )
}

export default ContactCard