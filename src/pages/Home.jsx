
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  MapPin,
  ArrowRight,
  Plane,
  Heart,
  CalendarDays,
  Search,
  Sparkles,
} from 'lucide-react'
import DestinationCard from '../components/DestinationCard'
import destinations from '../data/destinations'

const Home = () => {
  const [search, setSearch] = useState('')

  const popularDestinations = destinations.slice(0, 3)

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase()) ||
    destination.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden px-6 py-20 md:px-12 lg:min-h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          alt="Beautiful mountain landscape"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.style.display = 'none'
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/60 dark:bg-slate-950/75" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles size={17} className="text-teal-300" />
              Your journey starts here
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
              Explore The World,
              <span className="mt-2 block text-teal-300">
                Create Memories.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Discover breathtaking destinations, plan amazing trips,
              save your favorite places, and turn your travel dreams
              into unforgettable memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-7 py-4 font-bold text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-teal-300"
              >
                <Compass size={20} />
                Explore Destinations
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/my-trips"
                className="inline-flex items-center gap-2 rounded-xl border border-white/50 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-950"
              >
                <Plane size={20} />
                Plan Your Trip
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/25 pt-6">
              <div>
                <p className="text-2xl font-extrabold text-teal-300">
                  Explore
                </p>
                <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                  New Places
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-teal-300">
                  Discover
                </p>
                <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                  New Cultures
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-teal-300">
                  Enjoy
                </p>
                <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                  Every Moment
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900 md:p-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Where do you want to go?
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Search for your next unforgettable adventure.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 dark:border-slate-600 dark:bg-slate-800">
            <Search size={21} className="shrink-0 text-teal-600 dark:text-teal-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations or countries..."
              className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="text-sm font-semibold text-rose-500"
              >
                Clear
              </button>
            )}
          </div>

          {search.trim() && (
            <div className="mt-5">
              {filteredDestinations.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2">
                  {filteredDestinations.map((destination) => (
                    <DestinationCard
                      key={destination.id}
                      destination={destination}
                    />
                  ))}
                </div>
              ) : (
                <p className="py-5 text-center text-slate-500 dark:text-slate-400">
                  No destinations found. Try another search.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Popular Destinations */}
      {!search.trim() && (
        <section className="px-6 py-12 md:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                  Handpicked for you
                </p>

                <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                  Popular Destinations
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Get inspired by beautiful places around the world.
                </p>
              </div>

              <Link
                to="/explore"
                className="inline-flex items-center gap-2 font-bold text-teal-700 transition hover:gap-3 dark:text-teal-400"
              >
                View All Destinations
                <ArrowRight size={19} />
              </Link>
            </div>

            {popularDestinations.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {popularDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl bg-slate-50 p-8 text-center text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                Destinations will appear here when available.
              </p>
            )}

          </div>
        </section>
      )}

      {/* Features */}
      <section className="bg-slate-50 px-6 py-16 dark:bg-slate-900/60 md:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              Why TripMate?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Everything You Need to Travel
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Keep your travel inspiration, favorite destinations,
              and upcoming adventures organized in one place.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <div className="inline-flex rounded-xl bg-teal-100 p-3 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                <Compass size={27} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Discover Places
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Explore destinations and find inspiration for your next trip.
              </p>

              <Link
                to="/explore"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-400"
              >
                Start Exploring <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <div className="inline-flex rounded-xl bg-rose-100 p-3 text-rose-600 dark:bg-rose-950 dark:text-rose-300">
                <Heart size={27} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Save Favorites
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Keep your favorite destinations together for easy access.
              </p>

              <Link
                to="/favorites"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-400"
              >
                View Favorites <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <div className="inline-flex rounded-xl bg-sky-100 p-3 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                <CalendarDays size={27} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Plan Your Trips
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Organize travel dates and budgets for your future adventures.
              </p>

              <Link
                to="/my-trips"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-400"
              >
                Plan a Trip <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 px-6 py-12 text-center text-white sm:px-12 md:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <MapPin size={30} />
            </div>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Your Next Adventure Awaits
            </h2>

            <p className="mt-4 leading-7 text-teal-50">
              Start exploring new destinations and create your own
              unforgettable travel story with TripMate.
            </p>

            <Link
              to="/explore"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-teal-800 transition hover:-translate-y-1 hover:bg-teal-50"
            >
              Explore the World
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
