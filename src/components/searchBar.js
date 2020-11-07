import React from 'react';

const SearchBar = () => {
  return (<div className="container container__search-bar">
    <form className="search-bar__form">
      <input className="search-bar__input" id="searchInput" type="search" placeholder="Zoeken" name="searchInput" aria-label="Search input" autoComplete="off"></input>
      <button className="search-bar__button--submit" id="searchButton" value="Search" type="submit"></button>
    </form>
  </div>)
} 

export default SearchBar;
