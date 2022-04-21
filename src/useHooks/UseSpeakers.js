import { useState, useEffect, useReducer } from 'react'
import speakerData from '../data/speaker-data'
import speakersReducer, { ACTION } from '../reducers/speakersReducer'


export default function UseSpeakers() {
  const [isLoading, setIsLoading] = useState(true)
  const [speakerList, dispatch] = useReducer(speakersReducer, [])
  
// Get speakers data simulating API call
  useEffect(() => {
    setIsLoading(true)
    
    new Promise((resolve) => {
      setTimeout(() => { resolve() }, 1000)
    }).then(() => {
      setIsLoading(false)
    })

    dispatch({
      type: ACTION.setSpeakerList,
      data: speakerData
    })
    
    return () => { console.log('cleanup from Speakers component') }
  }, [])

//  Favorite Speaker toggle functionality
  const heartFavHandler = (e, favValue) => {
    e.preventDefault()
    // select clicked speaker by attribute 'data-session-id'
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value)

    dispatch({
      type: favValue ? ACTION.favorite : ACTION.unfavorite,
      sessionId: sessionId
    })
  }

// results of custom hook
  return { speakerList, isLoading, heartFavHandler }
}
