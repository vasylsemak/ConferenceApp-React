import { createContext } from 'react'
import UseSpeakers from './useHooks/UseSpeakers'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const { state, toggleFavSpeaker, favClickIncrement } = UseSpeakers()

  const provider = {
    showSignMeUp: true,
    isLoading: state.isLoading,
    speakerList: state.speakerList,
    favClickCount: state.favClickCount,
    toggleFavSpeaker,
    favClickIncrement
  }

  return (
    <GlobalContext.Provider value={provider}>
      {children}
    </GlobalContext.Provider>
  )
}