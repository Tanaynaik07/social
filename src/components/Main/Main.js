import React from "react";
import "../Main/main.css";
import Home from "./Home";
import Explore from "./Explore";
import Friends from "./Friends";

const Main = ({ selectedOption }) => {
  let content;

  switch (selectedOption) {
    case "Explore":
      content = <Explore />;
      break;
    case "Friends":
      content = <Friends />;
      break;
    default:
      content = <Home />;
  }

  return <div id="main"><center>{content}</center></div>;
};

export default Main;
