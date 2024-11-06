// SearchBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/searchBar.css';


function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" placeholder="What are you looking for?" className="searchInput" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
    </div>
  );
}

export default SearchBar;
