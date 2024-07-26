import React from 'react';
import ContactCard from './ContactCard';
import { useNavigate } from 'react-router-dom';
import '/src/global.css';

const ContactList = (props) => {
    
    let {contacts, removeContact} = props;
    
    //This delete function accepts 'id' from ContactCard.jsx and returns it to the parent i.e. App.jsx
    const deleteContact = (id) => {
        removeContact(id);
    }

    const renderContacts = contacts.map((contact) => {
        return (
           <ContactCard contact={contact} deleteContact={deleteContact} key={contacts.id} /> 
        )
    })

    let navigate = useNavigate();
    let add = () => navigate("/add")

    return (
        <>          
            <div className='contacts-container'>
                <div className="contacts-header">
                    <div className='details-header'>
                        <h3>Details</h3>
                    </div>
                    <button className='btn' onClick={add}>Add Contact</button>
                </div>
                <div className="contact-list">
                    {renderContacts}
                </div>
            </div>
            
        </>
    )
}

export default ContactList