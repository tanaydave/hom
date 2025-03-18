// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
         <Routes>
           <Route exact path="/" component={<Home/>} />
           {/* Add more routes here if needed */}
         </Routes>
       </Router>
  );
}

export default App;