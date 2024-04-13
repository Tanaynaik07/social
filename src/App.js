import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">



      <Navbar />
      <Sidebar onOptionClick={handleSidebarClick} />
      <Main selectedOption={selectedOption} />
    </div>
  );
}

export default App;
