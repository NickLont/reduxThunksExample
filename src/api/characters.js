import axios from 'axios'

const getCharacters = async () => {
  const characters = await axios.get('https://rickandmortyapi.com/api/character')
  return characters
}

export { getCharacters }
