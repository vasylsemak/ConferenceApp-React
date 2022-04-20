import React from 'react'
import Home from './Home'

const App = ({ pageName }) => (
  pageName === 'Home' ? <Home />
    : pageName === 'Speakers' ? <div>Speakers</div>
    : <div>Not found</div>
)

export default App