import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import SearchSuggestions from './SearchSuggestions';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [active, setActive] = useState(false);
  const handleSubmit = (e) => e.preventDefault();

  const debounceSearchTerm = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 500), [],
  );

  useEffect(() => {
    if (input.length >= 2) {
      debounceSearchTerm(input);
    } else {
      setSearchTerm('')
    };
  }, [debounceSearchTerm, input]);
  return (
    <div className="search-component ">
      <div className="search-bar">
        <div className="search-bar__container">
          <form className={`search-bar__form ${active ? 'active' : 'inactive'}`} onSubmit={handleSubmit} >
            <div className="search-bar__input-container">
              <input className="search-bar__input" id="searchInput" type="search" placeholder="Zoeken" name="searchInput" aria-label="Search input" autoComplete="off" value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setActive(true)} onBlur={() =>  setActive(false)}></input>
              {input && <button className="search-bar__button search-bar__button--reset" value="Reset" onClick={() => {
                setInput('') 
                setActive(false)}}>
                <CloseIcon className="search-bar__icon search-bar__icon--reset" title="Reset search" ></CloseIcon>
              </button> }
              <button className="search-bar__button search-bar__button--search" value="Search" type="submit">
                <SearchIcon className="search-bar__icon search-bar__icon--search" title="Search"></SearchIcon>
              </button>
            </div>
          </form>
        </div>
        {searchTerm && <SearchSuggestions query={searchTerm} setQuery={setInput}/> }
      </div>
    </div>
  
 );
};

export default SearchBar;
