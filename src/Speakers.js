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

  const heartFavHandler = (e, favValue) => {
    e.preventDefault()
    // select clicked speaker by attribute 'data-session-id'
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value)

    const refinedSpeakerList = speakerList.map(s => s.id === sessionId
      ? {...s, favorite: favValue}
      : s
    )
    // update speakers state after toggle on heart
    setSpeakerList(refinedSpeakerList)
  }

  return isLoading ? <div>...Loading</div> :
    (<div>

      <Menu />
      <Header />

      <div className='container'>
        <div className='row'>
          <div className='card-deck'>
            {speakerList.map(s => (
              <Speaker
                key={s.id}
                heartFavHandler={heartFavHandler}
                {...s} 
              />
            ))}
          </div>
        </div>
      </div>

    </div>)
}

export default Speakers