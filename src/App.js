import React from 'react'
import Home from './Home'
import Speakers from './Speakers'

const App = ({ pageName }) => (
  pageName === 'Home' ? <Home />
    : pageName === 'Speakers' ? <Speakers />
    : <div>Not found</div>
)

export default App