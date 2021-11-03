import { useSelector } from 'react-redux'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { selectCharactersData, selectCharactersLoading, selectCharactersError } from '../selectors/characters'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '100%'
  },
  card: {
    maxWidth: 250,
    margin: 16
  }
})

const CharactersList = () => {
  const classes = useStyles()

  const charactersData = useSelector(selectCharactersData)
  const charactersError = useSelector(selectCharactersError)
  const charactersLoading = useSelector(selectCharactersLoading)

  if (!charactersData) return null
  if (charactersLoading) return <p>Loading...</p>
  if (charactersError) return <p>{charactersError}</p>

  return (
    <div className={classes.container}>
      {
        charactersData && charactersData.map(character => (
          <Card className={classes.card} key={character.id}>
            <CardMedia
              component="img"
              image={character.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: <strong>{character.status}</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: <strong>{character.species}</strong>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      }
    </div>
  )
}

export default CharactersList
