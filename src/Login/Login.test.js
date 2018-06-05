import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Login from './Login';
import LoginButton from './LoginButton';

Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  })

  it('renders the name of the app', () => {
    expect(wrapper.containsMatchingElement(
      <h2 className="Login-title">
        Flashcards
      </h2>
    )).toEqual(true);
  });

  it('renders a login button', () => {
    expect(wrapper.find(LoginButton)).toHaveLength(1);
  });
});
