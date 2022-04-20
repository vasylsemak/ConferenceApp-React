import React, { useState } from 'react'
import Menu from './Menu'
import Header from './Header'
import SatSunSpeakers from './SatSunSpeakers'
import Speaker from './Speaker'
import UseSpeakers from './useHooks/UseSpeakers'

const Speakers = () => {
  const { 
    speakerList, 
    isLoading, 
    heartFavHandler
  } = UseSpeakers()

  const [speakersSat, setSpeakersSat] = useState(true)
  const [speakersSun, setSpeakersSun] = useState(true)

  const handleChangeSat = () => setSpeakersSat(!speakersSat)
  const handleChangeSun = () => setSpeakersSun(!speakersSun)

  const satSunProps = {
    speakersSat,
    speakersSun,
    handleChangeSat,
    handleChangeSun
  }

  const sortedSpeakers = speakerList.filter(s =>
    (speakersSat && s.sat) || (speakersSun && s.sun)
  )

  return isLoading 
    ? <div>...Loading</div>
    : (
      <div>
        <Menu />
        <Header />

        <div className='container'>
          <SatSunSpeakers {...satSunProps}/>

          <div className='row'>
            <div className='card-deck'>
              {sortedSpeakers.map(s => (
                <Speaker
                  key={s.id}
                  heartFavHandler={heartFavHandler}
                  {...s} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Speakers
