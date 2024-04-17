import React from 'react';
import './index.css';
import {Route, Routes, Navigate} from 'react-router-dom';
// import './App.css';

import LandingPage from "./frontend/pages/LandingPage.jsx";

function App() {

  return (
    
    <div className="App">
      <Routes>
      {/* Start page when open. */}
      <Route path="/" element={<Navigate to="/landing" />} />

      {/* Added pages and set path. */}
      <Route path="/landing" element={<LandingPage />} />

      </Routes>
    </div>
  );
}

export default App;