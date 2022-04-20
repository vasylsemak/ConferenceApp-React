import React from 'react'
import Menu from './Menu'
import Header from './Header'
import SatSunSpeakers from './SatSunSpeakers'
import Speaker from './Speaker'
import UseSpeakers from './useHooks/useSpeakers'

const Speakers = () => {
  const { speakerList, isLoading, heartFavHandler } = UseSpeakers()

  return isLoading ? <div>...Loading</div> :
    (<div>
      <Menu />
      <Header />

      <div className='container'>
        {/* <SatSunSpeakers
          speakSat={speakersSat}
          speakSun={speakersSun}
          handleSat={handleChangeSat}
          handleSun={handleChangeSun}
        /> */}

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