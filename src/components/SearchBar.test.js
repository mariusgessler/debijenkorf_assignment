import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const component = renderer.create(<SearchBar/>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
