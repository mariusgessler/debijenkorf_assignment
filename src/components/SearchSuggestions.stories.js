import React from 'react';
import  SearchSuggestions  from './SearchSuggestions';

export default {
  title: 'Components/SearchSuggestions',
  component: SearchSuggestions,
}

export const Primary = () => <SearchSuggestions className="active" query="query" />;
