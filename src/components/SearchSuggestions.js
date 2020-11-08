import React, { useEffect, useState } from 'react';
import useSuggestionsApi from '../hooks/useSuggestionsApi'
import { v4 as uuid } from 'uuid';
import { ReactComponent as ApplyIcon } from '../assets/icons/diagonal-arrow.svg';

const SearchSuggestions = ({query, setQuery}) => {
  const [{data, loading, error}, doFetch] = useSuggestionsApi();
  const { suggestions } = data;

  useEffect(() => {
    doFetch(`http://localhost:3000/search?q=${query}`)
  }, [doFetch, query]);

  return (
  <div className="search-component search-suggestions">
    <div className="search-suggestion__container">
      <ul className="search-suggestion__list">
        {suggestions.map((suggestion) => {
          return (
          <li className="search-suggestion__list" key={uuid()}>
            <span className="search-suggestion__list-item">
              {[...suggestion.searchterm].map((char) => query.includes(char) 
              ? <b className="highlight-char">{char}</b>
              : char
              )}
            </span>
            <button className="search-bar__button search-bar__button--apply" value="Apply" onClick={() => setQuery(suggestion.searchterm)}>
              <ApplyIcon className="search-bar__icon search-bar__icon--apply" title="Apply"></ApplyIcon>
            </button>
          </li>
          )
        })}
      </ul>
    </div>
  </div>
 );
};

export default SearchSuggestions;
