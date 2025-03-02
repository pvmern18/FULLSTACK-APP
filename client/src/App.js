import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateAgencyClient from './pages/CreateAgencyClient';
import UpdateClient from './pages/UpdateClient';
import TopClients from './pages/TopClients';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateAgencyClient />} />
                    <Route path="/update" element={<UpdateClient />} />
                    <Route path="/top-clients" element={<TopClients />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;