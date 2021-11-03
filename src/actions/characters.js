import { getCharacters } from '../api/characters'

export const getCharactersAction = () => {
  return async dispatch => {
    const characters = await getCharacters()
    dispatch({
      type: 'GET_CHARACTERS',
      data: characters.data.results
    })
  }
}
