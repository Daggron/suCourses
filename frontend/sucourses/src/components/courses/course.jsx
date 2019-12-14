import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Book from '../../book.gif'
import CourseDialog from '../Dialoug';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:"auto",
    marginTop: "2%",
    minHeight : 450,
  },
  media: {
    height: 140,
  },
});




export default function Course({courses}) {
  const [open, setOpen] = React.useState(false);
  const [cor , setCor] = React.useState({});
  const classes = useStyles();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setSelectedJob =(e)=>{
    setCor(e);
  }

  return (
    <Card className={classes.card}>
      <CourseDialog course={cor} open={open} handleClose={handleClose} />
      <CardActionArea>
       <img className={classes.media} src={Book} alt="Books" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                {courses.title}
          </Typography>
          <Typography style={{marginTop : 5}} variant="body2" color="textSecondary" component="p">
            {courses.description.slice(0,100)}...
          </Typography>
          <Typography style={{marginTop : 20}} variant="body2" color="textSecondary" component="p">
            Instructor - {courses.instructor}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{margin : "auto"}}>
        <Button onClick={()=>{
          handleClickOpen();
          setSelectedJob(courses)
          }} size="small" color="primary" variant="contained" style={{margin:"auto"}}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}