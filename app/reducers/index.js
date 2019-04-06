import { combineReducers } from 'redux'
import site from 'reducers/Site'
import auth from 'reducers/Auth'

export default combineReducers({
  site,
  auth,
})
