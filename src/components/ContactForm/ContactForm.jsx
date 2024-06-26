// src/ContactForm/ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm({ onAdd }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ id: Date.now().toString(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.group}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label}>Number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={styles.input}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
