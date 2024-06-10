// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import RegistrationForm from './components/RegistrationForm';
import SiteUnderMaintenance from './components/SiteUnderMaintenance';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SiteUnderMaintenance />} />
                <Route path="/start" element={<StartPage />} />
                <Route path="/register" element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
}

export default App;
