import React from 'react'
import ImageToggleOnScroll from './ImageToggleOnScroll'

const Speaker = ({
  id, firstName, lastName, favorite, bio, heartFavHandler
}) => {

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
            onClick={(e) => {
              heartFavHandler(e, !favorite)
            }}
          />
          <span>{firstName} {lastName}</span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  ) 
}

export default Speaker