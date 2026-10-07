import React from 'react';
import { useState, createContext } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { ClientServer } from "../ClientServer.jsx";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {

    const [isSignup, setIsSignup] = useState(false);
    const [isLogintrue, setIsLoginTrue] = useState(false);

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const router = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await ClientServer.post("/signup",

                {
                    username,
                    email,
                    password
                }
            );
            console.log("responce is", response.data);
            console.log("responce is", response.data.message);
            toast.success(response.data.message);
            setIsSignup(false);
        } catch (err) {
            toast.error('Server error');
            console.log(err);
        }
    }
    const handleLogin = async () => {
        try {
            const response = await ClientServer.post("/login",
                {
                    email,
                    password
                }
            );
            console.log("responce is", response.data.token);
            console.log("responce is", response.data);

            toast.success('user Logged in ');
            localStorage.setItem("token", response.data.token);
            setIsLoginTrue(true);
            router("/:url")
        } catch (err) {
            toast.error('Server error');
            console.log(err);
        }
    }

    return (
        <MyContext.Provider
            value={{
                isSignup, setIsSignup,
                handleRegister, handleLogin,
                email, setEmail,
                username, setUserName,
                password, setPassword,
                isLogintrue, setIsLoginTrue
            }}>
            {children}
        </MyContext.Provider>

    )
}

