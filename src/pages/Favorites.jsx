
import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Compass } from 'lucide-react'
import { useTrip } from '../context/TripContext'
import DestinationCard from '../components/DestinationCard'

const Favorites = () => {
  const { favorites } = useTrip()

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white md:px-12">

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
          <Heart size={30} fill="currentColor" />
        </div>

        <h1 className="mt-5 text-4xl font-extrabold">
          My Favorites
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Your favorite destinations, all in one place.
        </p>

        <p className="mt-3 text-sm font-semibold text-teal-700 dark:text-teal-400">
          {favorites.length} saved destination{favorites.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Favorites List */}
      {favorites.length > 0 ? (
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-16 max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-300">
            <Heart size={30} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-800 dark:text-white">
            No Favorites Yet!
          </h2>

          <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
            You haven't saved any destinations yet.
            Explore the world and add your favorite places here.
          </p>

          <Link
            to="/explore"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            <Compass size={20} />
            Explore Destinations
          </Link>
        </div>
      )}

    </section>
  )
}

export default Favorites
