import { createContext } from 'react'
import UseSpeakers from './useHooks/UseSpeakers'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const { speakerList, isLoading, heartFavHandler } = UseSpeakers()
  const provider = { speakerList, isLoading, heartFavHandler }

  return (
    <GlobalContext.Provider value={provider}>
      {children}
    </GlobalContext.Provider>
  )
}