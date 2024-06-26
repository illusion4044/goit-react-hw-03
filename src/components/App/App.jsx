
// import  { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';


export default function App() {

  const addUser = (newUser) => {
    console.log("Send to backend", newUser);
  };
  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm  onAdd={addUser}/>
    <SearchBox />
    <ContactList />
  </div>
  
  
  );
  }