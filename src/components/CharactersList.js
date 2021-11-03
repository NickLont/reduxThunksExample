import { useSelector } from 'react-redux'
import { makeStyles } from '@mui/styles'
import { selectCharactersData, selectCharactersError } from '../selectors/characters'
import CharacterDetail from './CharacterDetail'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '100%'
  }
})

const CharactersList = () => {
  const classes = useStyles()

  const charactersData = useSelector(selectCharactersData)
  const charactersError = useSelector(selectCharactersError)

  if (!charactersData && !charactersError) return null
  if (charactersError) return <span>{charactersError}</span>

  return (
    <div className={classes.container}>
      {
        charactersData && charactersData.map(character => (
          <CharacterDetail character={character} key={character.id} />
        ))
      }
    </div>
  )
}

export default CharactersList
