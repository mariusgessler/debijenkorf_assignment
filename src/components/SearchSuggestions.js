import React, { useEffect } from 'react';
import useSuggestionsApi from '../hooks/useSuggestionsApi'
import { v4 as uuid } from 'uuid';
import { ReactComponent as ApplyIcon } from '../assets/icons/diagonal-arrow.svg';

const SearchSuggestions = ({ query, setQuery}) => {
  const [{ data }, doFetch] = useSuggestionsApi(); // Todo: Render loading and error state
  const { suggestions } = data;

  useEffect(() => {
    const encodedURI = encodeURI(`http://localhost:3000/search?q=${query}`);
    doFetch(encodedURI);
  }, [doFetch, query]);

  return (
    <div className="search-suggestions__container">
      <ul className="search-suggestions__list">
        {suggestions.map((suggestion) => {
          return (
          <li className="search-suggestions__list-item" key={uuid()}>
            <span>
              {[...suggestion.searchterm].map((char) => query.includes(char) 
              ? <b key={uuid()} className="highlight-char">{char}</b>
              : char
              )}
              {`(${suggestion.nrResults})`}
            </span>
            <button className="search-bar__button search-bar__button--apply" value="Apply" onClick={() => setQuery(suggestion.searchterm)}>
              <ApplyIcon className="search-bar__icon search-bar__icon--apply" title="Apply"></ApplyIcon>
            </button>
          </li>
          )
        })}
      </ul>
    </div>
 );
};

export default SearchSuggestions;
