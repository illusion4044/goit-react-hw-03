// src/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <span className={styles.contactName}>{name}</span>
        <span className={styles.contactNumber}>{number}</span>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
