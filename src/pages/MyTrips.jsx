
import React, { useState } from 'react'
import { Plane } from 'lucide-react'
import { useTrip } from '../context/TripContext'
import TripCard from '../components/TripCard'

const MyTrips = () => {
  const { trips, addTrip, removeTrip } = useTrip()

  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [budget, setBudget] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!destination.trim() || !date || !budget) return

    addTrip({
      destination: destination.trim(),
      date,
      budget: Number(budget),
    })

    setDestination('')
    setDate('')
    setBudget('')
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white md:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Your Adventures
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            My Trips ✈️
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Plan your journey and keep all your trips in one place.
          </p>
        </div>

        {/* Add Trip Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900 md:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold">
            Plan a New Trip
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
                Destination
              </label>

              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Hunza Valley"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
                Travel Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toLocaleDateString('en-CA')}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
                Budget (PKR)
              </label>

              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g. 25000"
                min="1"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-xl bg-teal-600 px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
          >
            + Save Trip
          </button>
        </form>

        {/* Saved Trips */}
        <div className="mt-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold">
              Your Planned Trips
            </h2>

            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
              {trips.length} {trips.length === 1 ? 'Trip' : 'Trips'}
            </span>
          </div>

          {trips.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
              <Plane
                size={40}
                className="mx-auto text-teal-600 dark:text-teal-400"
              />

              <h3 className="mt-4 text-xl font-bold">
                No Trips Planned Yet
              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Fill in the form above to plan your first trip.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip) => (
                <TripCard
                  key={trip.id}
                  trip={trip}
                  onDelete={removeTrip}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default MyTrips
