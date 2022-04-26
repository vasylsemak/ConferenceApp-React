import React, { createContext} from 'react'
import Home from './Home'
import Speakers from './Speakers'
import { GlobalProvider } from './GlobalState'

const pageToShow = pageName => (
  pageName === 'Home' ? <Home />
  : pageName === 'Speakers' ? <Speakers />
  : <div>Not found</div>
)

const App = ({ pageName }) => (
  <GlobalProvider>
    <>{pageToShow(pageName)}</>
  </GlobalProvider>
)

export default App