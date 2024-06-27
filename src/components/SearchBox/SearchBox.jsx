import React from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={css.searchBoxContainer}>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className={css.searchBox}
        placeholder="Search contacts..."
      />
    </div>
  );
}
