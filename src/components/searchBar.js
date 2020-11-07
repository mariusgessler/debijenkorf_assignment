import React from 'react';
// import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
// import { ReactComponent as ApplyIcon } from '../assets/icons/diagonal-arrow.svg';


const SearchBar = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
  <div className="search-bar">
    <div className="search-bar__container">
        <form className="search-bar__form" onSubmit={handleSubmit} >
          <div className="search-bar__input-container">
            <input className="search-bar__input" id="searchInput" type="search" placeholder="Zoeken" name="searchInput" aria-label="Search input" autoComplete="off"></input>
            <button className="search-bar__button search-bar__button--search" id="searchButton" value="Search" type="submit">
              <SearchIcon className="search-bar__icon search-bar__icon--search" title="Search"></SearchIcon>
            </button>
          </div>
        </form>
      </div>
  </div>
 );
};

export default SearchBar;
