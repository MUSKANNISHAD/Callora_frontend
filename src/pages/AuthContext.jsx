import React from 'react';
import { useState, createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(true);

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })


            });
            console.log("responce is", response);


        } catch (err) {
            console.log(err);
        }
    }

    return (
        <MyContext.Provider
            value={{
                isLogin, setIsLogin
            }}>
            {children}
        </MyContext.Provider>

    )
}

