import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    margin: 16
  }
})

const CharacterDetail = ({ character }) => {
  const classes = useStyles()

  const { image, name, gender, status, species, location } = character

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
                Gender: <strong>{gender}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                Status: <strong>{status}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                Species: <strong>{species}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
                Location: <strong>{location.name}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail
