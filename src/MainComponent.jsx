import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import LineFollower from './pages/LineFollower'
import PosterPresentation from './pages/PosterPresentation'
import CircuitSolving from './pages/CircuitSolving'
import IntegrationBee from './pages/IntegrationBee'
import GamingContest from './pages/GamingContest'


const MainComponent = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/line-follower" element={<LineFollower />} />
        <Route path="/poster-presentation" element={<PosterPresentation />} />
        <Route path="/circuit-solving" element={<CircuitSolving />} />
        <Route path="/integreation-bee" element={<IntegrationBee />} />
        <Route path="/gaming" element={<GamingContest />} />
        {/* <Route path="/sponsors/apply" element={<Homepage />} /> */}
      </Routes>
    </div>
  )
}

export default MainComponent