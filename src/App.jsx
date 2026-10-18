
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { TripProvider } from './context/TripContext'
import { ThemeProvider } from './context/ThemeContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Explore from './pages/Explore'
import Favorites from './pages/Favorites'
import MyTrips from './pages/MyTrips'
import DestinationDetails from './pages/DestinationDetails'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <TripProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/my-trips" element={<MyTrips />} />

            <Route
              path="/destination/:id"
              element={<DestinationDetails />}
            />

            <Route path="/profile" element={<Profile />} />

            {/* Not Found Route — hamesha aakhir mein */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />

        </div>
      </ThemeProvider>
    </TripProvider>
  )
}

export default App
