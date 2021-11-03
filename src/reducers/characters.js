import { GET_CHARACTERS, GET_CHARACTERS_FAILURE, GET_CHARACTERS_SUCCESS } from '../constants'

const charactersReducer = (state = { data: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { data: null, loading: true, error: null }
    case GET_CHARACTERS_SUCCESS:
      return { data: action.data, loading: false, error: null }
    case GET_CHARACTERS_FAILURE:
      return { data: null, loading: false, error: action.error }
    default:
      return state
  }
}

export default charactersReducer
