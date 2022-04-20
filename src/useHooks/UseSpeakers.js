import { useState, useEffect } from 'react'
import speakerData from '../data/speaker-data'


export default function UseSpeakers() {
  const [speakerList, setSpeakerList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
// Get speakers data simulating API call
  useEffect(() => {
    setIsLoading(true)
    
    new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    }).then(() => {
      setIsLoading(false)
    })

    setSpeakerList(speakerData)
    
    return () => {
      console.log('cleanup from Speakers component')
    }
  }, [])

//  Favorite Speaker toggle functionality
  const heartFavHandler = (e, favValue) => {
    e.preventDefault()
    // select clicked speaker by attribute 'data-session-id'
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value)
    const refinedSpeakerList = speakerList.map(s =>
      s.id === sessionId
      ? {...s, favorite: favValue}
      : s
    )
      
    setSpeakerList(refinedSpeakerList)
  }

// results of custom hook
  return { speakerList, isLoading, heartFavHandler }
}
