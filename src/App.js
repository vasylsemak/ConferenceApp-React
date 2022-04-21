import React, { createContext} from 'react'
import Home from './Home'
import Speakers from './Speakers'

export const ConfigContext = createContext()
const configVal = { showSignMeUp: true }

const pageToShow = pageName => (
  pageName === 'Home' ? <Home />
  : pageName === 'Speakers' ? <Speakers />
  : <div>Not found</div>
)

const App = ({ pageName }) => (
  <ConfigContext.Provider value={configVal}>
    <>{pageToShow(pageName)}</>
  </ConfigContext.Provider>
)

export default App