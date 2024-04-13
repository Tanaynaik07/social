import React from 'react';
import "../sidebar/sidebar.css";
 

class Sidebar extends React.Component {
  handleClick(option) {
    this.props.onOptionClick(option);
  }

  render() {
    return (
      
      <div className="sidebar">
 
        <ul>
          <li onClick={() => this.handleClick("Home")}>Home</li>
          <li onClick={() => this.handleClick("Explore")}>Explore</li>
          <li onClick={() => this.handleClick("Friends")}>Friends</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
