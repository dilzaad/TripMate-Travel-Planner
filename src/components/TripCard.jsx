
import React from 'react'
import { MapPin, CalendarDays, Wallet, Trash2, Plane } from 'lucide-react'

const TripCard = ({ trip, onDelete }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}
      <div className="flex items-center justify-between bg-teal-50 p-5 dark:bg-slate-800">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-teal-100 p-3 text-teal-700 dark:bg-teal-900 dark:text-teal-300">
            <Plane size={24} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {trip.destination}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Your planned adventure
            </p>
          </div>
        </div>

        <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
          Planned
        </span>
      </div>

      {/* Trip Details */}
      <div className="space-y-4 p-5">

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <MapPin size={20} className="text-teal-600 dark:text-teal-400" />
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Destination
            </p>
            <p className="font-medium">
              {trip.destination || 'Not specified'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <CalendarDays size={20} className="text-teal-600 dark:text-teal-400" />
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Travel Date
            </p>
            <p className="font-medium">
              {trip.date || 'Date not selected'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <Wallet size={20} className="text-teal-600 dark:text-teal-400" />
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Estimated Budget
            </p>
            <p className="font-bold text-teal-700 dark:text-teal-400">
              {trip.budget
                ? `PKR ${Number(trip.budget).toLocaleString()}`
                : 'Not specified'}
            </p>
          </div>
        </div>

        {/* Delete Button */}
        <button
          type="button"
          onClick={() => onDelete(trip.id)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-3 font-semibold text-rose-600 transition hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 dark:text-rose-400 dark:hover:bg-rose-600 dark:hover:text-white"
        >
          <Trash2 size={18} />
          Delete Trip
        </button>

      </div>
    </div>
  )
}

export default TripCard
