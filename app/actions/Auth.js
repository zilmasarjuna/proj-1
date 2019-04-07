import Cookies from 'js-cookie'
import { isEmpty } from 'lodash'
import history from 'utils/history'
import config from 'app/config'
import Browser from 'utils/Browser'
import API from 'utils/API'

import {
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
} from 'constants/ActionTypes'

export const authenticateUserRequest = () => ({
  type: AUTHENTICATE_USER_REQUEST,
})

export const authenticateUserSuccess = data => ({
  type: AUTHENTICATE_USER_SUCCESS,
  currentUser: data,
})

export const authenticateUserFailure = errorMessage => ({
  type: AUTHENTICATE_USER_FAILURE,
  errorMessage,
})

export const removeToken = () => {
  Cookies.remove(config.auth_cookie_name, { path: '/', domain: Browser.getRootDomain() })
}

export const redirectToLogin = () => (
  Browser.setWindowHref('/')
)

const getAccessToken = () => (
  Cookies.get(config.auth_cookie_name)
)

export const loginUser = data => (
  (dispatch) => {
    dispatch(authenticateUserSuccess(data))

    Cookies.set(config.auth_cookie_name, data.access_token, {
      path: '/',
      domain: Browser.getRootDomain(),
    })

    history.push('/dashboard')
  }
)

export const authenticateByCredentials = ({ email, password }) => (
  (dispatch) => {
    dispatch(authenticateUserRequest())

    return API.post(
      '/auth/login',
      { email, password },
    ).then(
      (response) => {
        if (response.data.status) {
          dispatch(loginUser(response.data.data))
        } else {
          dispatch(authenticateUserFailure(response.data.message))
        }
      },
    ).catch((err) => {
      console.error(err) // eslint-disable-line no-console
    })
  }
)

export const authenticateByToken = () => (
  (dispatch) => {
    const accessToken = getAccessToken()

    if (isEmpty(accessToken)) {
      return redirectToLogin()
    }

    dispatch(authenticateUserRequest())

    return API.post(
      '/auth/authorization',
      { token: accessToken },
    ).then(
      (response) => {
        if (response.data.status) {
          dispatch(authenticateUserSuccess({ access_token: accessToken }))
        } else {
          dispatch(authenticateUserFailure())
          redirectToLogin()
        }
      },
    ).catch((err) => {
      console.error(err) // eslint-disable-line no-console
    })
  }
)

export const clearCurrentUser = () => (
  () => {
    removeToken()
    redirectToLogin()
  }
)
