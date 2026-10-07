import React, { useState } from "react";
import "./Landingpage.css";
import bgImage1 from "../../public/Callora1.jpg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const router = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const goToAuth = () => {
        router("/auth");
        setMenuOpen(false);
    };

    return (
        <div className="landing-page">

            {/* Background */}
            <img
                src={bgImage1}
                className="bg-img"
                alt="Callora background"
            />

            <div className="overlay"></div>

            {/* ================= NAVBAR ================= */}

            <nav className="navbar">

                <div className="logo">
                    Callora
                </div>

                {/* Desktop navigation */}
                <div className={`nav-content ${menuOpen ? "open" : ""}`}>

                    <div className="nav-links">
                        <a href="#home" onClick={() => setMenuOpen(false)}>
                            Home
                        </a>

                        <a href="#features" onClick={() => setMenuOpen(false)}>
                            Features
                        </a>

                        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
                            How it works
                        </a>

                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </div>

                    <div className="nav-actions">

                        <button
                            className="nav-login"
                            onClick={goToAuth}
                        >
                            Login
                        </button>

                        <button
                            className="nav-signup"
                            onClick={goToAuth}
                        >
                            Get Started
                        </button>

                    </div>

                </div>

                {/* Mobile menu button */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </nav>


            {/* ================= HERO ================= */}

            <main className="hero" id="home">

                {/* Left side */}

                <div className="hero-content">

                    <div className="eyebrow">
                        <span className="status-dot"></span>
                        Stay connected, wherever you are
                    </div>

                    <h1>
                        Distance shouldn't
                        <span> feel distant.</span>
                    </h1>

                    <p className="hero-description">
                        Connect with the people who matter most.
                        Callora makes communication simple, fast,
                        and secure.
                    </p>

                    <div className="hero-buttons">

                        <button
                            className="primary-btn"
                            onClick={goToAuth}
                        >
                            Get Started
                            <span className="arrow">→</span>
                        </button>

                        <button className="guest-btn" onClick={() => router("/:url")} >
                            Join as Guest
                        </button>

                    </div>

                    {/* Trust indicators */}

                    <div className="trust-row">

                        <div className="trust-item">
                            <div className="trust-icon">✓</div>
                            <div>
                                <strong>Simple</strong>
                                <small>Easy to use</small>
                            </div>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">⚡</div>
                            <div>
                                <strong>Fast</strong>
                                <small>Instant connection</small>
                            </div>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">⌕</div>
                            <div>
                                <strong>Secure</strong>
                                <small>Privacy focused</small>
                            </div>
                        </div>

                    </div>

                </div>


                {/* ================= PRODUCT MOCKUP ================= */}

                <div className="hero-visual">

                    <div className="glow"></div>

                    <div className="call-card">

                        {/* Card header */}

                        <div className="call-header">

                            <div className="profile">

                                <div className="avatar">
                                    C
                                </div>

                                <div>
                                    <strong>Callora</strong>
                                    <span>
                                        <i></i>
                                        Connected
                                    </span>
                                </div>

                            </div>

                            <div className="more">
                                •••
                            </div>

                        </div>


                        {/* Video area */}

                        <div className="video-area">

                            <div className="video-gradient"></div>

                            <div className="video-person">
                                <div className="person-head"></div>
                                <div className="person-body"></div>
                            </div>

                            <div className="video-label">
                                <span></span>
                                Live connection
                            </div>

                        </div>


                        {/* Call controls */}

                        <div className="call-info">

                            <div>
                                <strong>Connected</strong>
                                <span>00:24:18</span>
                            </div>

                            <div className="call-controls">

                                <button className="control">
                                    🎤
                                </button>

                                <button className="control">
                                    📹
                                </button>

                                <button className="control end">
                                    ☎
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Floating cards */}

                    <div className="floating-card connection-card">

                        <div className="mini-icon">
                            ✓
                        </div>

                        <div>
                            <strong>You're connected</strong>
                            <span>with someone special</span>
                        </div>

                    </div>


                    <div className="floating-card message-card">

                        <div className="message-avatar">
                            M
                        </div>

                        <div>
                            <span>New message</span>
                            <strong>Hey! How are you? 👋</strong>
                        </div>

                    </div>

                </div>

            </main>


            {/* ================= FEATURES ================= */}

            <section
                className="features"
                id="features"
            >

                <div className="feature">

                    <div className="feature-icon">
                        ⚡
                    </div>

                    <div>
                        <h3>Fast connection</h3>
                        <p>
                            Connect without unnecessary complexity.
                        </p>
                    </div>

                </div>


                <div className="feature">

                    <div className="feature-icon">
                        🔒
                    </div>

                    <div>
                        <h3>Privacy focused</h3>
                        <p>
                            Your conversations should stay yours.
                        </p>
                    </div>

                </div>


                <div className="feature">

                    <div className="feature-icon">
                        💬
                    </div>

                    <div>
                        <h3>Simple communication</h3>
                        <p>
                            Everything you need, without the clutter.
                        </p>
                    </div>

                </div>

            </section>


            {/* Dummy anchor sections so navbar links have destinations */}

            <section id="how-it-works" className="anchor-section">
            </section>

            <section id="about" className="anchor-section">
            </section>

        </div>
    );
}