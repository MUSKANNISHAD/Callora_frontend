import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import AuthProvider  from "./Contexts/AuthContext.jsx"
import VideoMeet from './pages/VideoMeet.jsx';
import History from "./pages/History.jsx";
import Home from "./pages/Home.jsx";
import Authentication from "./pages/Authentication.jsx"

export default function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/:url" element={<VideoMeet />} />
            <Route path="/History" element={<History />} />
            <Route path="/Home" element={<Home />} />

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}
