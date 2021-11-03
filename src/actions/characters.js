import { getCharacters } from '../api/characters'
import { GET_CHARACTERS, GET_CHARACTERS_FAILURE, GET_CHARACTERS_SUCCESS } from '../constants'

// this in reality is an action creator
export const getCharactersAction = () => {
  return async dispatch => {
    dispatch({
      type: GET_CHARACTERS
    })
    try {
      const characters = await getCharacters()
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        data: characters.data.results
      })
    } catch (e) {
      dispatch({
        type: GET_CHARACTERS_FAILURE,
        data: e
      })
    }
  }
}
