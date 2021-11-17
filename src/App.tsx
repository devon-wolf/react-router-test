import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DifferentPage from './pages/DifferentPage';
import ThirdPage from './pages/ThirdPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <header>This is a header</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diff" element={<DifferentPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
