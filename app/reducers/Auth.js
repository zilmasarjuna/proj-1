import {
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
} from 'constants/ActionTypes'

const initialState = {
  isAuthenticating: false,
  isLoggedIn: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      }
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
      }
    case AUTHENTICATE_USER_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        isLoggedIn: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
