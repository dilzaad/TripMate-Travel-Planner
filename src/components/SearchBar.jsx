
import React from 'react'
import { Search, X } from 'lucide-react'

const SearchBar = ({ search, setSearch }) => {
  const clearSearch = () => {
    setSearch('')
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900">

        <Search
          size={22}
          className="shrink-0 text-teal-600 dark:text-teal-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search destinations or countries..."
          aria-label="Search destinations"
          className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
        />

        {search && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="shrink-0 rounded-lg p-1 text-slate-500 transition hover:bg-slate-100 hover:text-rose-500 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
        Find your next adventure 🌍
      </p>
    </div>
  )
}

export default SearchBar
