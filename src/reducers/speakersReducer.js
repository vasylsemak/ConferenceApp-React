export const ACTION = {
  setSpeakerList: 'setSpeakerList',
  favorite: 'favorite',
  unfavorite: 'unfavorite',
  setIsLoading: 'setIsLoading',
  incrementFav: 'incrementFav'
}

export default function speakersReducer(state, action) {
  const toggleFavorite = favValue =>  state.speakerList.map(el =>
    el.id === action.sessionId ?  {...el, favorite: favValue} : el)

  switch(action.type) {
    case ACTION.setSpeakerList:
      return { ...state, speakerList: action.data }
    case ACTION.setIsLoading:
      return { ...state, isLoading: action.isLoading }
    case ACTION.favorite:
      return { ...state, speakerList: toggleFavorite(true) }
    case ACTION.unfavorite:
      return { ...state, speakerList: toggleFavorite(false) }
    case ACTION.incrementFav:
      return { ...state, favClickCount: state.favClickCount + 1 }
    default:
      return state
  }
}