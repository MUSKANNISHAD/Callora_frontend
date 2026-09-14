import React from 'react';
import { useRoutes, useNavigate } from "react-router-dom";
import Auth from './pages/Auth.jsx';
import LandingPage from "./pages/LandingPage.jsx"



export default function ProjectRoutes() {
    let element = useRoutes([
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "/auth",
            element: <Auth />

        }
    ]);
    return element;
}
