import { combineReducers } from 'redux'
import site from 'reducers/Site'
import auth from 'reducers/Auth'
import merchants from 'reducers/Merchants'

export default combineReducers({
  site,
  auth,
  merchants,
})
