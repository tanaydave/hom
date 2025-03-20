// src/App.js
import React, { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;



