import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import httpStatus from "http-Status";
import { ClientServer } from "../ClientServer.jsx";


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const authContext = useContext(AuthContext);

    const router = useNavigate();

    const handleRegister = async ({username, name, password}) => {
        try {
            console.log("username is", username);
            console.log("password is", password);
            console.log("name is", name);

            const response = await ClientServer.post("/signup",
                {
                    username: username,
                    password: password,
                    name: name
                }
            );
            // toast.success(response.data.message);
            if (response.status === httpStatus.CREATED) {
                return response.data.message;
            }
        } catch (err) {
            // toast.error('Server error');
            console.log(err);
            throw err;
        }
    }

    const handleLogin = async ({username, password}) => {
        try {
            let request = await ClientServer.post("/login", {
                username: username,
                password: password
            });

            if (request.status === httpStatus.OK) {
                localStorage.setItem("token", request.data.token);
                router("/home")
            }
        } catch (err) {
            throw err;
        }
    }
    const getHistoryOfUser = async () => {
        try {
            const request = await ClientServer.get("/get_all_activity/:token", {
                params: {
                    token: localStorage.getItem("token")
                }
            })
            // console.log("request is ", request.data);
            return request.data;
        } catch (e) {
            throw e;

        }
    }

    const addTohistory = async (meetingCode) => {
        try {
            const request = await ClientServer.post("/add_to_activity", {
                token: localStorage.getItem("token"),
                meeting_code: meetingCode
            });
            // console.log("server reacherd");
            return request.data;

        } catch (e) {
            throw e;
        }

    }

    return (
        <AuthContext.Provider
            value={{
                handleRegister, handleLogin,
                getHistoryOfUser, addTohistory
            }} >
            {children}
        </AuthContext.Provider>

    );
}
