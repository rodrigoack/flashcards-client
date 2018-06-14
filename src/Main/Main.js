import React, { Component } from 'react';

// Toolbox
import Button from 'react-toolbox/lib/button/Button';

// Components
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Flashcards from './Flashcards/Flashcards';
import FlashcardDialog from './FlashcardDialog';

// Styles
import './Main.css';

class Main extends Component {
  onClickTag = (tag) => {
    alert(tag.name);
  };

  render() {
    return (
      <div className="Main">
        <Header />
        <div className="Main-content">
          <Sidebar tags={TAGS} onClickTag={this.onClickTag}/>
          <Flashcards />
          <div className="Main-button">
            <Button
              icon="add"
              floating
              accent
            />
          </div>
        </div>
        <FlashcardDialog />
      </div>
    );
  }
}

const TAGS = [{name: 'History'}, {name: 'Geography'}, {name: 'Math'}];

export default Main;
