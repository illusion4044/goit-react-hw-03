// src/SearchBox/SearchBox.jsx
import React from 'react';
import styles from './SearchBox.module.css';

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      className={styles.searchBox}
      placeholder="Search contacts..."
    />
  );
}


