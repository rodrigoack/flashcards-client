import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

// Component
import Tags from './Tags';

// Dependencies
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tags /> ', () => {
  let wrapper;

  describe('when there are no tags', () => {
    beforeEach(() => {
      wrapper = shallow(<Tags />);
    });

    it('renders a message', () => {
      expect(wrapper.text()).toEqual('Loading...');
    });

  });

  describe('when there are (two) tags', () => {
    beforeEach(()=> {
      wrapper = shallow(<Tags tags={['foo', 'bar']} />);
    });

    it('renders a list of tags', () => {
      expect(wrapper.find(List).length).toEqual(1);
    });

    it('renders a list containing two tags', () => {
      expect(wrapper.find(ListItem).length).toEqual(2);
    });

  });

  // it('allows clicking on a tag', () => {
  //   const spy = jest.fn();
  //   wrapper = shallow(<Tags tags={['foo']} onClickTag={spy} />);

  //   wrapper.find(ListItem).simulate('click');
  //   expect(spy).toBeCalledWith('foo')
  // });

});
