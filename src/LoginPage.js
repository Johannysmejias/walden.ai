import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import googleIcon from './images/google_icon.png';
import facebookIcon from './images/facebook_icon.png';
import appleIcon from './images/apple_icon.png';
import logo from './images/walden_icon.png';


function LoginPage() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/how-to-use');
    };

    return (
        <div className="login-page">
            <div className="top-section">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="logo-text">Some Text Here</div>
                </div>
                <div className="sign-up-text">Doesn't have an account? <span>Sign up</span></div>
            </div>
            <div className="login-box">
                <h2>Sign in</h2>
                <form action="/login" method="post" className="login-form">
                    <div className="input-container">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="te xt" placeholder="example.email@gmail.com" name="email" id="email" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="psw" className="input-label">Password</label>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    </div>
                    <div className="extras">
                        <div>
                            <input type="checkbox" id="remember-me" name="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                    <button type="button" onClick={handleSignIn} className="login-button">Sign in</button>
                    <div className="social-icons">
                        <p>Or sign in with:</p>
                        <div>
                            <div className="icon-container">
                                <img src={googleIcon} alt="Google" />
                            </div>
                            <div className="icon-container">
                                <img src={facebookIcon} alt="Facebook" />
                            </div>
                            <div className="icon-container">
                                <img src={appleIcon} alt="Apple" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
