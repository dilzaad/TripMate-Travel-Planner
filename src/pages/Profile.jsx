
import React from 'react'
import { Link } from 'react-router-dom'
import {
  UserRound,
  Mail,
  MapPin,
  Plane,
  Heart,
  CalendarDays,
  Settings,
  Compass,
  ArrowRight,
} from 'lucide-react'
import { useTrip } from '../context/TripContext'

const Profile = () => {
  const { trips, favorites } = useTrip()

  const profile = {
    name: 'TripMate Traveler',
    email: 'traveler@example.com',
    location: 'Pakistan',
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white md:px-12">
      <div className="mx-auto max-w-5xl">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Your Account
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            My Profile
          </h1>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Manage your travel profile and explore your adventures.
          </p>
        </div>

        {/* Profile Header */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <div className="h-36 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500" />

          <div className="px-6 pb-8 md:px-10">
            <div className="-mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl border-4 border-white bg-teal-100 text-teal-700 shadow-lg dark:border-slate-900 dark:bg-teal-950 dark:text-teal-300">
                  <UserRound size={54} />
                </div>

                <div className="pb-2">
                  <h2 className="text-2xl font-extrabold">
                    {profile.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Travel Enthusiast 🌍
                  </p>
                </div>
              </div>

              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                <Compass size={18} />
                Explore Places
              </Link>
            </div>

            {/* Profile Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <Mail className="shrink-0 text-teal-600 dark:text-teal-400" size={22} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Email Address
                  </p>
                  <p className="break-all font-medium">
                    {profile.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <MapPin className="shrink-0 text-teal-600 dark:text-teal-400" size={22} />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Statistics */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-teal-100 p-3 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                <Plane size={24} />
              </div>
              <span className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">
                {trips.length}
              </span>
            </div>
            <h3 className="mt-5 font-bold">Planned Trips</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your travel plans
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-rose-100 p-3 text-rose-600 dark:bg-rose-950 dark:text-rose-300">
                <Heart size={24} />
              </div>
              <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
                {favorites.length}
              </span>
            </div>
            <h3 className="mt-5 font-bold">Favorite Places</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Places you love
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-sky-100 p-3 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                <CalendarDays size={24} />
              </div>
              <span className="text-3xl font-extrabold text-sky-700 dark:text-sky-400">
                {new Date().getFullYear()}
              </span>
            </div>
            <h3 className="mt-5 font-bold">Travel Year</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your journey continues
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:p-8">
          <h2 className="text-2xl font-bold">Quick Access</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              to="/my-trips"
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-teal-500 hover:bg-teal-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <div className="flex items-center gap-3">
                <Plane className="text-teal-600 dark:text-teal-400" size={23} />
                <div>
                  <p className="font-bold">My Trips</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    View your planned adventures
                  </p>
                </div>
              </div>
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/favorites"
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-rose-400 hover:bg-rose-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <div className="flex items-center gap-3">
                <Heart className="text-rose-500" size={23} />
                <div>
                  <p className="font-bold">My Favorites</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Revisit your favorite places
                  </p>
                </div>
              </div>
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/explore"
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-sky-500 hover:bg-sky-50 dark:border-slate-700 dark:hover:bg-slate-800 sm:col-span-2"
            >
              <div className="flex items-center gap-3">
                <Settings className="text-sky-600 dark:text-sky-400" size={23} />
                <div>
                  <p className="font-bold">Discover More</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Find your next destination
                  </p>
                </div>
              </div>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Profile
