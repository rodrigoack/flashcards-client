import React from 'react';

// Components
import Tags from './Tags';

// Styles
import './Sidebar.css'

const Sidebar = (props) => (
  <div className="Sidebar">
    <Tags
      tags={props.tags}
    />
  </div>
);

export default Sidebar;
