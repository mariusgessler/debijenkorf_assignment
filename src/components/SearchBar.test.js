import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  const wrapper = shallow(<SearchBar/>);
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('.overlay has active class on focusing input', () => {
    wrapper.find('.search-bar__input').simulate('focus');
    expect(wrapper.find('.overlay').hasClass('active')).toEqual(true);
  });

  it('.search-bar has active class on focusing input', () => {
    wrapper.find('.search-bar__input').simulate('focus');
    expect(wrapper.find('.search-bar').hasClass('active')).toEqual(true);
  });

  it('.search-bar__form has active class on focusing input', () => {
    wrapper.find('.search-bar__input').simulate('focus');
    expect(wrapper.find('.search-bar__form').hasClass('active')).toEqual(true);
  });

  it('suggestions does NOT have active class on focusing input', () => {
    wrapper.find('.search-bar__input').simulate('focus');
    expect(wrapper.find('.search-suggestions').hasClass('active')).toEqual(false);
  });

  it('suggestions does NOT have active class when input has less than 2 characters', () => {
    wrapper.find('.search-bar__input').simulate('change', { target: { value: 'te' } });
    expect(wrapper.find('.search-suggestions').hasClass('active')).toEqual(false);
  });
});
