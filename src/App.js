import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HowToUsePage from './HowToUsePage';
import InputAndMapPage from './InputAndMapPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/how-to-use" element={<HowToUsePage />} />
                <Route path="/input-and-map" element={<InputAndMapPage />} />
            </Routes>
        </Router>
    );
}

export default App;
