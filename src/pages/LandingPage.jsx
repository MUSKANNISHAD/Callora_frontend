import React from 'react';
import "./Landingpage.css";
import bgImage1 from "../../public/Callora1.jpg";
import auth from './Auth';
import { Link, useNavigate } from "react-router-dom";


export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className="landing-page">
            <img src={bgImage1} className="bg-img" alt="background" />

            <div className="overlay"></div>

            <nav className="navbar">
                <h2 className="logo">Callora</h2>
                <div className="nav-buttons">
                    <button className="btn secondary">Join as Guest</button>
                    <button onClick={() => { router("/auth") }} className="btn outline">Register</button>
                    <button onClick={() => { router("/auth") }} className="btn primary">Login</button>
                </div>
            </nav>

            <div className="hero">
                <div className="left">
                    <h1 className="left-heading">
                        Connect with your Loved Ones
                    </h1>
                    <p className="para">
                        Cover distance with Callora — fast, simple, and secure.
                    </p>
                    <button onClick={() => {
                        router("/auth")
                    }} className="btn primary big">Get Started</button>
                </div>
            </div>
        </div>
    );
}