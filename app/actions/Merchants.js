import {
  MERCHANTS_REQUEST,
  MERCHANTS_REQUEST_SUCCESS,
  MERCHANTS_REQUEST_FAILED,
} from 'constants/ActionTypes'

import API from 'utils/API'

export const MerchantRequest = () => ({
  type: MERCHANTS_REQUEST,
})

export const MerchantRequestSuccess = (data, pagination) => ({
  type: MERCHANTS_REQUEST_SUCCESS,
  data,
  pagination,
})

export const MerchantRequestFailed = error => ({
  type: MERCHANTS_REQUEST_FAILED,
  error,
})

export const getMerchantList = (page = 1, sort = '', sortBy = '', keyword = '') => (
  (dispatch) => {
    dispatch(MerchantRequest())

    return API.get(`/ottokasir/web-admin/merchants?page=${page}&sorting=${sort}&sort_by=${sortBy}&keyword=${keyword}`).then(
      (response) => {
        if (response.data.meta.code === 200) {
          dispatch(MerchantRequestSuccess(response.data.data, response.data.pagination))
        } else {
          dispatch(MerchantRequestFailed(response.data.meta.message))
        }
      },
    ).catch(() => {
      dispatch(MerchantRequestFailed('Ada masalah dengan server'))
    })
  }
)
