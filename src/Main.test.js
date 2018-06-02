import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
import Flashcards from './Flashcards';
import FlashcardDialog from './FlashcardDialog';

Enzyme.configure({ adapter: new Adapter() });

describe ('<Main />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('renders a Header', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders a Sidebar', () => {
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });

  it('renders Flashcards', () => {
    expect(wrapper.find(Flashcards)).toHaveLength(1);
  });

  it('renders a FlashcardDialog', () => {
    expect(wrapper.find(FlashcardDialog)).toHaveLength(1);
  });

});
