
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Slide } from '@material-ui/core';

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



export default  function Category(props) {
  const classes = useStyles();
  const {category} = props
  return (
    <React.Fragment>
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
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
    </Slide>
    </React.Fragment>
  );
}

Category.propTypes = {
  category : PropTypes.shape({
    title : PropTypes.string,
    icon : PropTypes.string,
    _id : PropTypes.string
  })
}


