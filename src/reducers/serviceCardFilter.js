import { SET_SERVICE_FILTER, SET_TR_SERVICE_FILTER, SET_SERVICE_SEARCH } from '../constants'
const initialState = {
  selected: 'All'
}
export default function serviceCardFilter (state=initialState, action) {
  switch (action.type) {
    case SET_SERVICE_FILTER:
      return {
        ...state,
        selected: action.filter
      }
    case SET_SERVICE_SEARCH:
      return {
        ...state,
        search: action.search
      }
    case SET_TR_SERVICE_FILTER:
      return {
        ...state,
        selectedTR: action.trfilter
      }

    default:
      return state
  }
}
