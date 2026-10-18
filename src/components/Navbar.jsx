import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Favorites', path: '/favorites' },
    { name: 'My Trips', path: '/my-trips' },
    { name: 'Profile', path: '/profile' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/95 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <Globe size={28} className="text-teal-600" />
          <h1 className="text-xl font-extrabold text-teal-600 sm:text-2xl">
            TripMate
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 text-sm font-semibold md:flex lg:gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition hover:text-teal-600 ${
                location.pathname === link.path
                  ? 'text-teal-600'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />

          <span className="hidden text-sm font-medium text-slate-600 dark:text-slate-300 lg:inline">
            Travel More
          </span>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800 md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-1 border-t border-slate-200 pt-3 dark:border-slate-700 md:hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-slate-800 dark:hover:text-teal-400 ${
                location.pathname === link.path
                  ? 'bg-teal-50 text-teal-700 dark:bg-slate-800 dark:text-teal-400'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar