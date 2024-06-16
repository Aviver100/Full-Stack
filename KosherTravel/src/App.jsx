import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import NavBar from './components/NavBar/NavBar';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destination/:id" element={<Destination />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
``
