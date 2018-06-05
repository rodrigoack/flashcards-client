import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

// Component
import Header from './Header';

// Dependencies
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders an app bar', () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });

  it('renders a navigation bar', () => {
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });

  it('renders an about link', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  })

});
