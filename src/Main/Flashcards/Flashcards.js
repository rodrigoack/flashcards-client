import React, { Component } from 'react';

// Components
import Flashcard from './Flashcard';

// Toolbox
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';

// Styles
import './Flashcards.css'


class Flashcards extends Component {
  renderFlashCards() {
    if (this.props.tagId === null){
      return 'Select a tag on the left';
    }

    if (this.props.flashcards === null) {
      return 'Loading...';
    }

    if (this.props.flashcards.length === 0) {
      return 'Add a flashcard for this tag!';
    }

    const {
      flashcards,
      selectedFlashcardIndex,
    } = this.props;

    const currentFlashcard = flashcards[selectedFlashcardIndex];

    return(
      <div className="Flashcards-content">
        <div className="Flashcards-button">
          <Button icon="keyboard_arrow_left" floating />
        </div>
        <Flashcard
          flashcard={currentFlashcard}
        />
        <div className="Flashcards-button">
          <Button icon="keyboard_arrow_right" floating />
        </div>
        <div className="Flashcards-index">
          <Chip>
          </Chip>
        </div>
      </div>
    );
  };

  render() {
    return(
      <div className="Flashcards">
        {this.renderFlashCards()}
      </div>
    );
  }
}

export default Flashcards;
