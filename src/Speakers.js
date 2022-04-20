import React, { useState, useEffect } from 'react'
import Header from './Header'
import Menu from './Menu'
import Speaker from './Speaker'
import speakerData from './data/speaker-data'

const Speakers = () => {
  const [speakerList, setSpeakerList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1500)
    }).then(() => {
      setIsLoading(false)
    })

    setSpeakerList(speakerData)

    return () => {
      console.log('cleanup from Speakers component')
    }
  }, [])

  return isLoading ? <div>...Loading</div> :
    (<div>

      <Menu />
      <Header />

      <div className='container'>
        <div className='row'>
          <div className='card-deck'>
            {speakerList.map(s => (
              <Speaker key={s.id} {...s} />
            ))}
          </div>
        </div>
      </div>

    </div>)
}

export default Speakers