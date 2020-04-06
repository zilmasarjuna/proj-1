import {
  MERCHANTS_REQUEST,
  MERCHANTS_REQUEST_SUCCESS,
  MERCHANTS_REQUEST_FAILED,
} from 'constants/ActionTypes'

const initialState = {
  list: {
    isLoading: false,
    data: [],
    error: false,
    pagination: {},
  },
}

export default function merchants(state = initialState, action) {
  switch (action.type) {
    case MERCHANTS_REQUEST:
      return {
        ...state,
        list: {
          isLoading: true,
          data: [],
          error: false,
          pagination: {},
        },
      }
    case MERCHANTS_REQUEST_SUCCESS:
      return {
        ...state,
        list: {
          isLoading: false,
          data: action.data,
          error: false,
          pagination: action.pagination,
        },
      }
    case MERCHANTS_REQUEST_FAILED:
      return {
        ...state,
        list: {
          isLoading: false,
          data: [],
          error: true,
          pagination: {},
        },
      }
    default:
      return state
  }
}
