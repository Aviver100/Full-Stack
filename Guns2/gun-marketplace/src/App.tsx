// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import SellItem from './components/SellItem';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/sell" element={<SellItem />} />
      </Routes>
    </Router>
  );
}

export default App;
