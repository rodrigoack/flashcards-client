import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

// Component
import Sidebar from './Sidebar';

// Dependencies
import Tags from './Tags';

Enzyme.configure({ adapter: new Adapter() });

describe('<Sidebar /> ', () => {
  it('renders a list of tags', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find(Tags).length).toEqual(1);
  });
});
