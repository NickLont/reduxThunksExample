import { Button, LinearProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersAction } from '../actions'
import { selectCharactersData, selectCharactersError, selectCharactersLoading } from '../selectors/characters'
import CharactersList from './CharactersList'

const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative'
  },
  loader: {
    width: '100%',
    position: 'absolute',
    top: 0
  }
})

const CharactersContainer = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const charactersData = useSelector(selectCharactersData)
  const charactersError = useSelector(selectCharactersError)
  const charactersLoading = useSelector(selectCharactersLoading)

  const onClickGetCharacters = () => {
    dispatch(getCharactersAction())
  }

  return (
    <>
      {charactersLoading && (
        <Box className={classes.loader}>
          <LinearProgress />
        </Box>
      )}
      {!charactersData && !charactersLoading && !charactersError && (
        <div className={classes.buttonContainer}>
          <Button variant="contained" onClick={onClickGetCharacters}>
            Get Characters
          </Button>
        </div>
      )}
      <CharactersList />
    </>
  )
}

export default CharactersContainer
