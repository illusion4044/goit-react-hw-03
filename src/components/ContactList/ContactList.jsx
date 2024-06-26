// src/ContactList/ContactList.jsx
import React from 'react';
import Contact from '../Contact/Contact';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
