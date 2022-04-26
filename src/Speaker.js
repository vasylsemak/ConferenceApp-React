import React, { useContext } from 'react'
import ImageToggleOnScroll from './ImageToggleOnScroll'
import { FavClickCountContext } from './context/favClickIncrementContext'

// wrap Speaker in React.memo() for cashing
const Speaker = React.memo((props) => {
  const { id, firstName, lastName, favorite, bio, toggleFavSpeaker } = props
  const { favClickIncrement } = useContext(FavClickCountContext)

  const handleClick = e => {
    toggleFavSpeaker(e, !favorite)
    favClickIncrement()
  }

  console.log(`Speaker: ${firstName} ${lastName}!`)

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt={`${firstName} ${lastName}`}
      />

      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={handleClick}
          />
          <span>{firstName} {lastName}</span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  ) 
})

export default Speaker