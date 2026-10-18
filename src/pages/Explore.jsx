
import React, { useState } from 'react'
import { Compass } from 'lucide-react'
import DestinationCard from '../components/DestinationCard'
import SearchBar from '../components/SearchBar'
import destinations from '../data/destinations'

const Explore = () => {
  const [search, setSearch] = useState('')

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase()) ||
    destination.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white md:px-12">

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Discover the World
        </p>

        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
          Explore Destinations
        </h1>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          Find your next adventure, discover beautiful places,
          and make unforgettable memories.
        </p>

        {/* Reusable SearchBar */}
        <div className="mt-8">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>
      </div>

      {/* Destination Cards */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))
        ) : (
          <div className="col-span-full py-16 text-center">
            <Compass
              size={44}
              className="mx-auto text-slate-400"
            />

            <h2 className="mt-4 text-2xl font-bold">
              No Destinations Found
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Try searching for another destination or country.
            </p>

            <button
              type="button"
              onClick={() => setSearch('')}
              className="mt-5 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

    </section>
  )
}

export default Explore
