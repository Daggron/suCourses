
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    <Card className={classes.card}>
      <CardContent>
        <Typography  color="textPrimary" variant="h5" component="h1" gutterBottom>
              {category.title}
        </Typography>
      <Typography>
        <Typography variant="h1">
            <i className={category.icon} style={{height: "100"}} ></i>
        </Typography>
        
      </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

