// HowToUsePage.js
import React from 'react';
import './HowToUsePage.css';
import { useNavigate } from "react-router-dom";
import user_icon from './images/user_icon.png';
import logo from './images/walden_icon.png';
import Button from '@mui/material/Button';
import ask_icon from './images/ask_icon.png';

function HowToUsePage() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/input-and-map");
    }

    return (
        <div className="how-to-use-page">
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="logo-text">walden.ai - pond alpha</p>
                </div>
                <div className="user-container">
                    <div className="login-info">
                        <p>Happy logged in, Emerson</p>
                        <img src={user_icon} alt="user icon"/>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="how-to-use-container">
                    <h2><img className="question-mark" src={ask_icon} alt="ask icon"/> How to use  <span className="pond-text"> Pond</span></h2>
                    <ol>
                        <li><i>Select your preferences from the list</i></li>
                        <li><i>Browse searches and play with parameters</i></li>
                        <li><i>Take the resulting areas to Idealista/Fotocasa</i></li>
                    </ol>
                    <Button variant="contained" onClick={handleClick} style={{backgroundColor: "grey", marginTop: "20px"}}>Start Searching !</Button>
                </div>
            </div>
            <div className="footer">
                <p>© 2023 Walden.ai. All rights reserved. | Terms of Service | Privacy Policy</p>
            </div>
        </div>
    );
}

export default HowToUsePage;
