import React, { createContext} from 'react'
import Home from './Home'
import Speakers from './Speakers'
import { GlobalProvider } from './GlobalState'
import { FavClickCountProvider } from './context/favClickIncrementContext'

const pageToShow = pageName => (
  pageName === 'Home' ? <Home />
  : pageName === 'Speakers' ? <Speakers />
  : <div>Not found</div>
)

const App = ({ pageName }) => (
  <GlobalProvider>
    <FavClickCountProvider>
      <>{pageToShow(pageName)}</>
    </FavClickCountProvider>
  </GlobalProvider>
)

export default App