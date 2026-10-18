
import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Heart, ArrowUpRight } from 'lucide-react'
import { useTrip } from '../context/TripContext'

const DestinationCard = ({ destination }) => {
  const { favorites, toggleFavorite } = useTrip()

  const isFavorite = favorites.some(
    (item) => item.id === destination.id
  )

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

      {/* Destination Image */}
      <div className="relative h-64 overflow-hidden">
       <img
  src={destination.image}
  alt={destination.name}
  onError={(e) => {
    e.currentTarget.onerror = null
    e.currentTarget.src =
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
  }}
  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
/>

        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => toggleFavorite(destination)}
          aria-label={
            isFavorite
              ? `Remove ${destination.name} from favorites`
              : `Add ${destination.name} to favorites`
          }
          className={`absolute right-4 top-4 rounded-full p-3 shadow transition ${
            isFavorite
              ? 'bg-rose-500 text-white'
              : 'bg-white text-rose-500 hover:bg-rose-500 hover:text-white'
          }`}
        >
          <Heart
            size={20}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>

        {/* Country */}
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800">
          {destination.country}
        </span>
      </div>

      {/* Destination Details */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <MapPin size={16} className="text-teal-600" />
          {destination.location}
        </div>

        <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
          {destination.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {destination.description}
        </p>

        {/* Budget and Explore */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-700">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Estimated budget
            </p>

            <p className="font-bold text-teal-700 dark:text-teal-400">
              {destination.budget}
            </p>
          </div>

          <Link
            to={`/destination/${destination.id}`}
            className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white transition hover:bg-teal-700"
          >
            Explore <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard
