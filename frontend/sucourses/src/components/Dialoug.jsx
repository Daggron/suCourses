import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';


export default function CourseDialog({course , open ,  handleClose}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{course.title}</DialogTitle>
        <DialogContent>
            <Typography component="h1" variant="h5">
                Description
            </Typography>
          <DialogContentText>
                {course.description}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
            <Typography component="h1" variant="h5">
                Instructor
            </Typography>
          <DialogContentText>
                {course.instructor}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
            <Typography component="h1" variant="h5">
               Amount
            </Typography>
          <DialogContentText>
                {course.Level}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
            <Typography component="h1" variant="h5">
                Value
            </Typography>
          <DialogContentText>
                {course.value}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
            <Typography component="h1" variant="h5">
                Category
            </Typography>
          <DialogContentText>
                {course.Category}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
            <Typography component="h1" variant="h5">
              Instructor's Language
            </Typography>
          <DialogContentText>
                {course.Language}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <br/>
          <Button autoFocus onClick={handleClose} color="secondary" variant="contained">
                Close
          </Button>
          <a href={course.url} target="_blank" rel="noopener noreferrer">
                <Button variant="contained"  color="primary" autoFocus>
                        Visit
                </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CourseDialog.propTypes = {
  course : PropTypes.object,
  open : PropTypes.bool,
  handleClose : PropTypes.func
}
