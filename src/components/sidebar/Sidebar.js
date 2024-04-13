import React from 'react';
import "../sidebar/sidebar.css";
import sideicon from "../../assests/soon.png";

class Sidebar extends React.Component {
  handleClick(option) {
    this.props.onOptionClick(option);
  }

  render() {
    return (
      <div className="sidebar">
        <img src={sideicon} alt="Sidebar Icon" />
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
