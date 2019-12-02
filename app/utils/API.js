import axios from 'axios'
import config from 'app/config'
import Browser from 'utils/Browser'
import { getAccessToken, removeToken } from 'actions/Auth'
import { mainPersistConfig } from 'store/configureStore'
import { purgeStoredState } from 'redux-persist'

const apiBaseURL = 'http://localhost:3000'

axios.defaults.baseURL = apiBaseURL
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.request.use(
  (response) => {
    if (!response.headers.Authorization) {
      const token = getAccessToken()

      if (token) {
        response.headers.Authorization = token
      }
    }

    return response
  },
  error => Promise.reject(error),
)

axios.interceptors.response.use(
  (response) => {
    if (response.data.data) {
      if (response.data.data.message === 'Token signature is expired') {
        purgeStoredState(mainPersistConfig).then(() => {
          removeToken()
          Browser.setWindowHref('/login')
        })
      }
    }

    return response
  },
  error => Promise.reject(error),
)

export default class API {
  static get(path, options = {}) {
    return axios.get(
      path, { ...options },
    )
  }

  static post(path, data = {}, options = {}) {
    return axios.post(
      path, data, { ...options },
    )
  }

  static put(path, data = {}, options = {}) {
    return axios.put(
      path, data, { ...options },
    )
  }

  static delete(path, options = {}) {
    return axios.delete(
      path, { ...options },
    )
  }
}
