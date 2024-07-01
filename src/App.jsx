import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Clasificaciones from './components/pages/Clasificaciones/Clasificaciones';
import './App.css';
import Header from './components/organisms/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clasificaciones" element={<Clasificaciones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
