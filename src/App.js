import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GiftDetail from './components/GiftDetail';
import './styles/App.css';  // Certifique-se de que o caminho está correto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift/:id" element={<GiftDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
