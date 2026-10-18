
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  MapPin,
  Wallet,
  ArrowLeft,
  Heart,
  CalendarDays,
} from 'lucide-react'
import destinations from '../data/destinations'
import { useTrip } from '../context/TripContext'

const DestinationDetails = () => {
  const { id } = useParams()

  const destination = destinations.find(
    (item) => item.id === Number(id)
  )

  const { favorites, toggleFavorite } = useTrip()

  if (!destination) {
    return (
      <div className="min-h-screen bg-slate-50 p-10 text-center text-slate-900 dark:bg-slate-950 dark:text-white">
        <h1 className="text-3xl font-bold">
          Destination Not Found
        </h1>

        <Link
          to="/explore"
          className="mt-5 inline-block text-teal-600 underline dark:text-teal-400"
        >
          Back to Explore
        </Link>
      </div>
    )
  }

  const isFavorite = favorites.some(
    (item) => item.id === destination.id
  )

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* Destination Image */}
      <div className="relative h-80 md:h-[480px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        <Link
          to="/explore"
          className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-slate-800 shadow-lg transition hover:bg-teal-50"
        >
          <ArrowLeft size={18} />
          Back to Explore
        </Link>

        <div className="absolute bottom-8 left-6 text-white md:left-12">
          <p className="font-semibold text-teal-300">
            {destination.country}
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">
            {destination.name}
          </h1>

          <p className="mt-3 flex items-center gap-2 text-white/90">
            <MapPin size={18} />
            {destination.location}
          </p>
        </div>
      </div>

      {/* Destination Information */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">

        {/* Description */}
        <div className="md:col-span-2">
          <p className="font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Discover More
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            About This Destination
          </h2>

          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            {destination.description}
          </p>

          <div className="mt-6 flex items-center gap-3 text-slate-700 dark:text-slate-200">
            <MapPin size={21} className="text-teal-600 dark:text-teal-400" />
            <span>{destination.location}</span>
          </div>

          <div className="mt-4 flex items-center gap-3 text-slate-700 dark:text-slate-200">
            <CalendarDays size={21} className="text-teal-600 dark:text-teal-400" />
            <span>Plan your next adventure whenever you're ready.</span>
          </div>
        </div>

        {/* Budget Card */}
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Estimated Budget
          </p>

          <div className="mt-2 flex items-center gap-2 text-2xl font-bold text-teal-700 dark:text-teal-400">
            <Wallet size={22} />
            {destination.budget}
          </div>

          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Estimated amount; actual costs may vary.
          </p>

          {/* Favorite Button */}
          <button
            type="button"
            onClick={() => toggleFavorite(destination)}
            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
              isFavorite
                ? 'bg-rose-100 text-rose-600 hover:bg-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:hover:bg-rose-900'
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            <Heart
              size={20}
              fill={isFavorite ? 'currentColor' : 'none'}
            />

            {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
          </button>

          {/* Plan Trip */}
          <Link
            to="/my-trips"
            className="mt-3 block rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Plan a Trip
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DestinationDetails
