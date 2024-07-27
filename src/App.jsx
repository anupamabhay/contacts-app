import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import {v4 as uuid} from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import '/src/global.css';
import ContactDetail from './components/ContactDetail';
import api from './api/contacts';
import EditContact from './components/EditContact';

const App = () => {

  //store all the user contacts as an array
  const [contacts, setContacts] = useState([]);
  console.log(contacts);

  //CREATE OPERATION -> handler function to create a request in order to update the 'contacts' array
  const addContact = async (contact) => {
    /*
      - ...contact: destructuring the 'user' object's properties (name, email and phone) sent by AddToContact.jsx and adding them to the request object with the 'id' property. 
      - This request object will be sent to the json server using the post method of axios.
      - post() returns a response object which contains several properties. We need access to the 'data' property of the response object as it contains the json data. We can access it using response.data or directly access it by destructuring {data}.
    */
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    
    //updating the 'contacts' state array with the response data received from the server
    setContacts([...contacts, response.data]); 
  }

  //READ or FETCH OPERATION -> function to fetch contacts from the JSON server 
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  //The state data is lost whenever the page reloads, so we are taking the data from the JSON server and adding it to the state when the page renders for the first time (in case the page reloads).
  useEffect(() => {
    const getContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getContacts();
  }, []);

  //UPDATE OPERATION -> function to update the contact on the server
  const updateContact = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);    
    let {id, name, email, phone} = response.data;
    
    //updating the 'contacts' state array with the modified values using the map() function
    const newDetails = contacts.map((current) => {
      return current.id === id ? {...response.data} : current;
    });
    setContacts(newDetails);
  }

  //DELETE OPERATION -> function to delete a contact from the JSON server
  const removeContact = async (id) => {
    api.delete(`/contacts/${id}`);

    /*
      - deleting a contact from the state (contacts) using the filter method.
      - id of a specific contact is passed and compared with the id(s) of each contact in the state.
      - the contacts in the state whose id != the id of the particular contact received by the function are stored in a new list, and this list is passed to the updater function in order to update the state (contacts) without the removed contact.
      - this function accepts id from ContactList.jsx
    */
    const newContacts = contacts.filter((current) => {
      return current.id !== id;
    });
    setContacts(newContacts); 
  }

  return (
    <>
      <div className='main-container'>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Layout/>}>

              <Route index element={<ContactList contacts={contacts} removeContact={removeContact} />} />

              <Route path='/add' element={<AddContact addContact={addContact} />} />

              <Route path='/contact/:id' element={<ContactDetail/>} />

              <Route path='/edit' element={<EditContact updateContact={updateContact} />} />
              
              <Route path='*' element={<ErrorPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>  
  )
}

export default App;