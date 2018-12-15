import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
