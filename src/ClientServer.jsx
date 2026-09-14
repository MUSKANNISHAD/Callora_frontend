import axios from "axios";

export const ClientServer = axios.create({
    baseURL: "https://callora-backend-g7t2.onrender.com/"
});