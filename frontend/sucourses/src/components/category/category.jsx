
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    minWidth:200,
    maxWidth: 275,
    margin:"5%",
    float:"left",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Category({category}) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Card className={classes.card}>
      <CardContent>
        <Typography   variant="h5" component="h1" gutterBottom>
              {category.title}
        </Typography>
      <Typography variant="h1" component="h1">
            <i className={category.icon} style={{height: "100"}} ></i>
      </Typography>
      </CardContent>
      <CardActions>
        <Link to={`category/find/?category=${category.title}`} >
        <Button size="medium" variant="contained" color="primary" style={{marginLeft:15}}>View Courses</Button>
        </Link>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}

