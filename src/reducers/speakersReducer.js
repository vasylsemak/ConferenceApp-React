export const ACTION = {
  setSpeakerList: 'setSpeakerList',
  favorite: 'favorite',
  unfavorite: 'unfavorite'
}

export default function speakersReducer(state, action) {
  const toggleFavorite = favValue =>  state.map(el =>
    el.id === action.sessionId ?  {...el, favorite: favValue} : el)

  switch(action.type) {
    case ACTION.setSpeakerList:
      return action.data
    case ACTION.favorite:
      return toggleFavorite(true)
    case ACTION.unfavorite:
      return toggleFavorite(false)
    default:
      return state
  }
}