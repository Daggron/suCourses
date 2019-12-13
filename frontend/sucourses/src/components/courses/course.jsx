import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Book from '../../book.gif'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:"auto",
    marginTop: "2%",
    minHeight : 400,
    height:500
  },
  media: {
    height: 140,
  },
});

export default function Course({courses}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
       <img className={classes.media} src={Book} alt="Books" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                {courses.title}
          </Typography>
          <Typography style={{marginTop : 5}} variant="body2" color="textSecondary" component="p">
            {courses.description}
          </Typography>
          <Typography style={{marginTop : 5}} variant="body2" color="textSecondary" component="p">
            {courses.instructor}
          </Typography>
          <Typography style={{marginTop : 5}} variant="body2" color="textSecondary" component="p">
            {courses.Level}
          </Typography>
          <Typography style={{marginTop : 5}} variant="body2" color="textSecondary" component="p">
            {courses.value}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{margin : "auto"}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <a href={courses.url} target="_blank" rel="noopener noreferrer">
        <Button size="small" color="secondary" variant="contained">
            View Course
         </Button>
        </a>
      </CardActions>
    </Card>
  );
}