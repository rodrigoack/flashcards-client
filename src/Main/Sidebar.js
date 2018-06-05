import React from 'react';

// Components
import Tags from './Tags';

const Sidebar = (props) => (
  <div className="Sidebar">
    <Tags
      tags={props.tags}
    />
  </div>
);

export default Sidebar;
