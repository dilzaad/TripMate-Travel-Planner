
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Home,
  ArrowLeft,
  MapPin,
  SearchX,
} from 'lucide-react'

const NotFound = () => {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-slate-50 px-6 py-16 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-900/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/20" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-teal-200 bg-teal-50 text-teal-600 shadow-sm dark:border-teal-800 dark:bg-teal-950 dark:text-teal-400">
          <SearchX size={48} />
        </div>

        {/* Error Number */}
        <h1 className="mt-7 bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Oops! You’re Lost
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
          Looks like this destination is off the map.
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Lost Message */}
        <div className="mx-auto mt-7 flex max-w-md items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left dark:border-slate-700 dark:bg-slate-900">
          <MapPin size={25} className="shrink-0 text-teal-600 dark:text-teal-400" />

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Every great journey has a wrong turn. Let’s get you back on track!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-teal-700"
          >
            <Home size={19} />
            Back to Home
          </Link>

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:text-teal-400"
          >
            <Compass size={19} />
            Explore Places
          </Link>

        </div>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
        >
          <ArrowLeft size={16} />
          Return to your starting point
        </Link>

      </div>
    </section>
  )
}

export default NotFound
