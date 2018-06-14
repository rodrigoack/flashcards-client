import React from 'react';

// Toolbox
import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';

// Components
import Markdown from './Markdown';

// Styles
import './Flashcard.css';



const Flashcard = () => (
  <Card className="Flashcard">
    <IconMenu
    icon="more_vert"
    menuRipple
    className="Flashcard-menu">
      <MenuItem
      value="edit"
      icon="edit"
      caption="Edit"
      />
      <MenuDivider />
      <MenuItem
        value="signout"
        icon="delete"
        caption="Delete"
      />
    </IconMenu>
    <CardText>
      CardText
    </CardText>
    <CardActions className="Flashcard-actions">
      <Button
        icon="replay"
        label="Flip"
      />
    </CardActions>
  </Card>
)

export default Flashcard;
