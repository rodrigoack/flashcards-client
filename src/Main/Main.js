import React from 'react';

// Toolbox
import Button from 'react-toolbox/lib/button/Button';

// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Flashcards from './Flashcards';
import FlashcardDialog from './FlashcardDialog';

// Styles
import './Main.css';

const Main = () => (
  <div className="Main">
    <Header />
    <div className="Main-content">
      <Sidebar />
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
)

export default Main;
