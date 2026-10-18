
import React from 'react'
import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-5 py-4 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/95 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <Globe size={30} className="text-teal-600" />
          <h1 className="text-2xl font-extrabold text-teal-600">
            TripMate
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200 md:flex">
          <Link to="/" className="transition hover:text-teal-600">
            Home
          </Link>

          <Link to="/explore" className="transition hover:text-teal-600">
            Explore
          </Link>

          <Link to="/favorites" className="transition hover:text-teal-600">
            Favorites
          </Link>

          <Link to="/my-trips" className="transition hover:text-teal-600">
            My Trips
          </Link>
          <Link to="/profile">Profile</Link>
        </div>

        {/* Theme Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden text-sm font-medium text-slate-600 dark:text-slate-300 sm:inline">
            Travel More
          </span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
