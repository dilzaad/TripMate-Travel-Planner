
import React from 'react'
import { Link } from 'react-router-dom'
import { Plane, Heart, MapPin, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 text-slate-800 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-white md:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <Plane size={28} className="text-teal-600 dark:text-teal-400" />
            <span className="text-2xl font-extrabold text-teal-700 dark:text-teal-400">
              TripMate
            </span>
          </Link>

          <p className="mt-4 max-w-sm leading-7 text-slate-600 dark:text-slate-400">
            Discover beautiful destinations, plan your journeys,
            and create unforgettable travel memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>

          <div className="mt-4 flex flex-col items-start gap-3 text-slate-600 dark:text-slate-400">
            <Link to="/" className="transition hover:text-teal-600 dark:hover:text-teal-400">
              Home
            </Link>

            <Link to="/explore" className="transition hover:text-teal-600 dark:hover:text-teal-400">
              Explore Destinations
            </Link>

            <Link to="/favorites" className="transition hover:text-teal-600 dark:hover:text-teal-400">
              My Favorites
            </Link>

            <Link to="/my-trips" className="transition hover:text-teal-600 dark:hover:text-teal-400">
              My Trips
            </Link>
          </div>
        </div>

        {/* Explore More */}
        <div>
          <h2 className="text-lg font-bold">Explore More</h2>

          <p className="mt-4 flex items-start gap-2 leading-7 text-slate-600 dark:text-slate-400">
            <MapPin size={20} className="mt-1 shrink-0 text-teal-600 dark:text-teal-400" />
            Your next adventure is waiting. Find a destination
            and start planning today.
          </p>

          <Link
            to="/explore"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            Start Exploring
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} TripMate. All rights reserved.
        </p>

        <p className="flex items-center gap-1">
          Made with
          <Heart size={15} className="text-rose-500" fill="currentColor" />
          for travellers
        </p>
      </div>
    </footer>
  )
}

export default Footer
