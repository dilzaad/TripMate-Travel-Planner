
import React, { createContext, useContext, useEffect, useState } from 'react'

const TripContext = createContext()

export const TripProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('tripmate-favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem('tripmate-trips')
    return savedTrips ? JSON.parse(savedTrips) : []
  })

  // Favorites ko localStorage mein save karna
  useEffect(() => {
    localStorage.setItem('tripmate-favorites', JSON.stringify(favorites))
  }, [favorites])

  // Trips ko localStorage mein save karna
  useEffect(() => {
    localStorage.setItem('tripmate-trips', JSON.stringify(trips))
  }, [trips])

  // Favorite add ya remove karna
  const toggleFavorite = (destination) => {
    setFavorites((prevFavorites) => {
      const alreadyFavorite = prevFavorites.some(
        (item) => item.id === destination.id
      )

      if (alreadyFavorite) {
        return prevFavorites.filter(
          (item) => item.id !== destination.id
        )
      }

      return [...prevFavorites, destination]
    })
  }

  // Naya trip add karna
  const addTrip = (trip) => {
    setTrips((prevTrips) => [
      ...prevTrips,
      { ...trip, id: Date.now() },
    ])
  }

  // Trip delete karna
  const removeTrip = (id) => {
    setTrips((prevTrips) =>
      prevTrips.filter((trip) => trip.id !== id)
    )
  }

  // Trip update karna
  const updateTrip = (updatedTrip) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === updatedTrip.id ? updatedTrip : trip
      )
    )
  }

  return (
    <TripContext.Provider
      value={{
        favorites,
        trips,
        toggleFavorite,
        addTrip,
        removeTrip,
        updateTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  )
}

// Context use karne ka custom hook
export const useTrip = () => useContext(TripContext)

export default TripContext
