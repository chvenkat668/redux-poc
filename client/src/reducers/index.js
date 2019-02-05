import { combineReducers } from 'redux'
import serviceCards from './serviceCards'
import serviceCardFilter from './serviceCardFilter'

const rootReducer = combineReducers({
  serviceCards,
  serviceCardFilter,
})

export default rootReducer
