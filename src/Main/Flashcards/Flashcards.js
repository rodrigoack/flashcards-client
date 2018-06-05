import React from 'react';

// Components
import Flashcard from './Flashcard';

// Toolbox
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';

// Styles
import './Flashcards.css'


const Flashcards = () => (
  <div className="Flashcards">
    <div className="Flashcards-content">
      <div className="Flashcards-button">
        <Button icon="keyboard_arrow_left" floating />
      </div>
      <Flashcard />
      <div className="Flashcards-button">
        <Button icon="keyboard_arrow_right" floating />
      </div>
      <div className="Flashcards-index">
        <Chip>
        </Chip>
      </div>
    </div>
  </div>
);

export default Flashcards;
