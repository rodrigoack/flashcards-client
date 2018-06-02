import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Login from './Login';
import Main from './Main';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  describe('without a token param', () => {
    it('renders a Login view', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Login)).toHaveLength(1);
    });
  });

  describe('with a token param', () => {
    it('renders a Main view', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({token: 'foobar'});
      expect(wrapper.find(Main)).toHaveLength(1);
    });
  });
})
