import React from 'react';
import './HowToUsePage.css';
import { useNavigate } from "react-router-dom";
import user_icon from './images/user_icon.png';
import logo from './images/walden_icon.png';
import ask_icon from './images/ask_icon.png';
import Button from '@mui/material/Button';

function HowToUsePage() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/search");
    }

    return (
        <div className="how-to-use-page">
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="logo-text">walden.ai - pond alpha</p>
                </div>
                <div className="user-container">
                    <div className="user-info">
                        <p>Happy logged in, <span className="emerson">Emerson</span></p>
                        <img src={user_icon} alt="user icon"/>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="how-to-use-container">
                    <div className="ask-icon-container">
                        <img className="question-mark" src={ask_icon} alt="question mark"/>
                        <h2>How to Use <span className="pond">Pond</span></h2>
                    </div>
                    <ol>
                        <li><i>Select your preferences from the list</i></li>
                        <li><i>Browse searches and play with parameters</i></li>
                        <li><i>Take the resulting areas to Idealista/Fotocasa</i></li>
                    </ol>
                    <Button variant="contained" onClick={handleClick} style={{backgroundColor: "grey", marginTop: "2rem"}}>Start Searching!</Button>
                </div>
            </div>
        </div>
    );
}

export default HowToUsePage;
