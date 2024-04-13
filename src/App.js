import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Login from '../src/components/authentication/Login';
import Signup from '../src/components/authentication/Signup';
import SubApp from './SubApp';

function App() {

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<SubApp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
