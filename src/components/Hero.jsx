
import React from 'react'
import { Link } from 'react-router-dom'
import { Compass, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-sky-50 px-6 py-16 transition-colors duration-500 dark:bg-slate-950 md:px-16">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Light and Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/45 transition-colors duration-500 dark:bg-slate-950/75" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl text-white">

        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-2 text-sm backdrop-blur-md">
          <Compass size={17} />
          Discover the beauty of the world
        </span>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          Explore The World,
          <span className="block text-teal-300">
            Create Memories.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
          Discover amazing destinations, plan your next adventure,
          and turn your travel dreams into unforgettable memories.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-teal-300"
          >
            <Compass size={20} />
            Explore Destinations →
          </Link>

          <Link
            to="/my-trips"
            className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-7 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
          >
            <MapPin size={19} />
            Plan Your Trip
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/90">
          <div>
            <p className="text-2xl font-extrabold text-teal-300">Explore</p>
            <p>Beautiful Destinations</p>
          </div>

          <div>
            <p className="text-2xl font-extrabold text-teal-300">Plan</p>
            <p>Your Next Adventure</p>
          </div>

          <div>
            <p className="text-2xl font-extrabold text-teal-300">Enjoy</p>
            <p>Unforgettable Memories</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
