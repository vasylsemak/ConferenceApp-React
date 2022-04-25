import React, { createContext} from 'react'
import Home from './Home'
import Speakers from './Speakers'
import { GlobalProvider } from './GlobalState'

export const ConfigContext = createContext()
const configVal = { showSignMeUp: true }

const pageToShow = pageName => (
  pageName === 'Home' ? <Home />
  : pageName === 'Speakers' ? <Speakers />
  : <div>Not found</div>
)

const App = ({ pageName }) => (
  <ConfigContext.Provider value={configVal}>
    <GlobalProvider>
      <>{pageToShow(pageName)}</>
    </GlobalProvider>
  </ConfigContext.Provider>
)

export default App