import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from '../src/components/Pages/HomePage/HomePage';
import Destinations from '../src/components/Pages/Destinations/destinations';
import Times from '../src/components/Pages/Times/Times';
// import Action from './pages/Action';
// import AnotherAction from './pages/AnotherAction';
// import SomethingElseHere from './pages/SomethingElseHere';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Destinations" element={<Destinations />} />
                <Route path="/Times" element={<Times />} />
                <Route path="/Action" element={<Action />} />
                <Route path="/AnotherAction" element={<AnotherAction />} />
                <Route path="/SomethingElseHere" element={<SomethingElseHere />} />
            </Routes>
        </Router>
    );
};

export default App;
