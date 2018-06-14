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
  handleClickTag = (tag) => {
    alert(tag.name);
  };

  render() {
    return (
      <div className="Main">
        <Header />
        <div className="Main-content">
          <Sidebar tags={TAGS} onClickTag={this.handleClickTag}/>
          <Flashcards
            flashcards={FLASHCARDS}
            selectedFlashcardIndex={3}
            tagId={3}
          />
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

const TAGS = [
  {id: 1, name: 'Geography'},
  {id: 2, name: 'Physics'},
  {id: 3, name: 'Math'},
];

const FLASHCARDS = [
  { tagId: 1, question: 'What is the capital-city of Brazil?', answer: 'Brasilia' },
  { tagId: 2, question: 'What is the main equation of the general relativity theory?', answer: 'E = mc²' },
  { tagId: 1, question: 'How many people are there in the world', answer: 'More than 7 billion.' },
  { tagId: 3, question: 'How much is 2 + 2?', answer: '4' },
];

export default Main;
