import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField } from '@mui/material';
import "./Home.css";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from '../Contexts/AuthContext.jsx';


export default function HomeComponent() {


    let router = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addTohistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        console.log("meetingCode is", meetingCode);
        await addTohistory(meetingCode);
        router(`/${meetingCode}`);
    }

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            router("/auth")
        }
    }, []);

    return (
        <>
            <div className="home-navbar" >
                <div>
                    <h2 onClick={() => router("/")}>Apna Video Call</h2>
                </div>
                <div>
                    <IconButton onClick={() => router("/history")} ><RestoreIcon /><p>History</p></IconButton>
                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        router("/auth")
                    }} >Logout </Button>
                </div>
            </div >
            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>
                        <div>
                            <TextField onChange={(e) => setMeetingCode(e.target.value)} value={meetingCode} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
                        </div>
                    </div>

                </div>
                <div className="rightPanel">
                    <img src='/logo3.png' alt="logo" />
                </div>
            </div>
        </>
    )
}
