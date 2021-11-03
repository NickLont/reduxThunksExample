import { GET_CHARACTERS, GET_CHARACTERS_FAILURE, GET_CHARACTERS_SUCCESS } from '../constants'

const charactersInitialState = { data: null, loading: false, error: null }

const charactersReducer = (state = charactersInitialState, action) => {
  switch (action.type) {
  case GET_CHARACTERS:
    return { ...state, loading: true }
  case GET_CHARACTERS_SUCCESS:
    return { ...state, data: action.data, loading: false }
  case GET_CHARACTERS_FAILURE:
    return { ...state, error: action.error, loading: false }
  default:
    return state
  }
}

export default charactersReducer
