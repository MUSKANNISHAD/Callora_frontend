import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Auth from './pages/Auth.jsx';
import { MyContext, MyProvider } from "./pages/AuthContext";
import VideoMeet from './pages/VideoMeet.jsx';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <MyProvider>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/:url" element={<VideoMeet />} />
          </Routes>
        </MyProvider>
      </Router>
    </div>
  )
}
