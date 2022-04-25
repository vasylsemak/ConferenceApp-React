import React, { useState, useMemo, useContext } from 'react'
import Menu from './Menu'
import Header from './Header'
import SatSunSpeakers from './SatSunSpeakers'
import Speaker from './Speaker'
import { GlobalContext } from './GlobalState'

const Speakers = () => {
  const [speakersSat, setSpeakersSat] = useState(true)
  const [speakersSun, setSpeakersSun] = useState(true)
  const handleChangeSat = () => setSpeakersSat(!speakersSat)
  const handleChangeSun = () => setSpeakersSun(!speakersSun)

  const {
    speakerList, isLoading, heartFavHandler
  } = useContext(GlobalContext)

  const satSunProps = {
    speakersSat,
    speakersSun,
    handleChangeSat,
    handleChangeSun
  }

// useMemo will sort speakers once, and then only will sorted based on dependencies array,
// so sortedSpeakers will be chashed
  const newList = useMemo(
    () => speakerList.filter(s => (speakersSat && s.sat) || (speakersSun && s.sun)),
    [speakerList, speakersSat, speakersSun]
  )
  const sortedSpeakers = isLoading ? [] : newList

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
