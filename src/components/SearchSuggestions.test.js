import React from 'react';
import SearchSuggestions from './SearchSuggestions';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockResponse = {
  "suggestions": [
    {
       "searchterm": "heren jas",
       "nrResults": 1100,
    },
    {
       "searchterm":"dames jas",
       "nrResults": 1501,
    },
    {
       "searchterm":"kenzo jas",
       "nrResults": 62,
    },
  ]
};

jest.mock('../hooks/useSuggestionsApi', () => {
  return jest.fn(() => [{data: mockResponse}, jest.fn()]
  );
});

describe('SearchSuggestions', () => {
  const wrapper = shallow(<SearchSuggestions query="jas"/>);

  it('correct amount of list-items gets rendered according to mock data', () => {
    expect(wrapper.find('.search-suggestions__list').children()).toHaveLength(mockResponse.suggestions.length);
  });
});
