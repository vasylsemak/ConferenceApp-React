import { useEffect, useReducer, useCallback } from 'react'
import speakerData from '../data/speaker-data'
import speakersReducer, { ACTION } from '../reducers/speakersReducer'


export default function UseSpeakers() {

  const [state, dispatch] = useReducer(speakersReducer, {
    speakerList: [],
    isLoading: true,
    favClickCount: 5
  })


// Get speakers data simulating API call
  useEffect(() => {
    dispatch({
      type: ACTION.setIsLoading,
      isLoading: state.isLoading
    })
    new Promise((resolve) => {
      setTimeout(() => { resolve() }, 1000)
    }).then(() => {
      dispatch({
        type: ACTION.setIsLoading,
        isLoading: !state.isLoading
      })
    })
    dispatch({
      type: ACTION.setSpeakerList,
      data: speakerData
    })
    return () => { console.log('cleanup from Speakers component') }
  }, [])


//  wrap in useCallback to memoize this handler on each speaker component,
//  so only component rerender if f-n values are changed
  const toggleFavSpeaker = useCallback((e, favValue) => {
    e.preventDefault()
    // select clicked speaker by attribute 'data-session-id'
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value)
    dispatch({
      type: favValue ? ACTION.favorite : ACTION.unfavorite,
      sessionId: sessionId
    })
  }, [])


  const favClickIncrement = () => {
    dispatch({ type: ACTION.incrementFav })
  }

// results of custom hook
  return { state, toggleFavSpeaker, favClickIncrement }
}
