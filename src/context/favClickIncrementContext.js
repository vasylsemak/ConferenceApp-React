import { createContext, useContext, useMemo } from 'react'
import { GlobalContext } from '../GlobalState'

export const FavClickCountContext = createContext()

export const FavClickCountProvider = ({ children }) => {
  const { favClickIncrement } = useContext(GlobalContext)
  
  const provider = useMemo(() => {
    return { favClickIncrement }
  }, [])

  return (
    <FavClickCountContext.Provider value={provider}>
      {children}
    </FavClickCountContext.Provider>
  )
}




