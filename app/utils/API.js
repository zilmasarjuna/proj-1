import axios from 'axios'

const apiBaseURL = 'http://localhost:3000'

axios.defaults.baseURL = apiBaseURL
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.response.use(response => response, error => Promise.reject(error))

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
