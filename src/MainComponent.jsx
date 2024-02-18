import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import {Routes, Route, Navigate} from 'react-router-dom'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors'


const MainComponent = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsors" element={<Sponsors />} />
            {/* <Route path="/sponsors/apply" element={<Homepage />} /> */}
        </Routes>
    </div>
  )
}

export default MainComponent