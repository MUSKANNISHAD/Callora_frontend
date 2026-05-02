import React from 'react'
import { useState, useEffect } from 'react';
import "./Auth.css";
import { MyContext } from "./AuthContext.jsx";
import { useContext } from 'react';
import { Toaster } from "react-hot-toast";

export default function Auth() {
    const { isLogin, setIsLogin } = useContext(MyContext);

    return (
        <div className="auth-container">
            <Toaster position="right" />
            <div className="auth-card">
                <h1>{isLogin ? "Signup with us" : "Login"}</h1>
                {console.log(isLogin)}

                {
                    isLogin ? (
                        <form action="/signup" method="POST" noValidate>

                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" name="username" placeholder="Enter username" id="username" className="form-control" required />

                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" placeholder="Enter email" id="email" className="form-control" required />

                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" placeholder="Enter password" id="password" className="form-control" required />

                            <button type="submit" className="auth-btn">Sign Up</button>
                        </form>) : (
                        <form action="/login" method="POST" noValidate>

                            <label htmlFor="email" className="form-label">Email</label>
                            <br></br>

                            <input type="email" name="email" placeholder="Enter email" id="email" className="form-control" required />
                            <label htmlFor="password" className="form-label">Password</label>
                            <br></br>

                            <input type="password" name="password" placeholder="Enter password" id="password" className="form-control" required />

                            <button type="submit" className="auth-btn">Login</button>
                        </form>
                    )
                }

                <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Already have an account? " : "Don't have an account? "}
                    <span>{isLogin ? "Login" : "Sign Up"}</span>
                </p>
            </div>
        </div>
    );
}