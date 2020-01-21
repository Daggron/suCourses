import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide(props) {
 
  const handleUrl = ()=>{
    window.open(props.job.url, '_blank');
  }

  return (
    <div>
      
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="h5" component="h1">
                Job Profile :- {props.job.title}
            </Typography>

            <Typography variant="h5" component="h1">
              Company :-  {props.job.company}
            </Typography>

            <img src={props.job.company_logo} alt="Company logo" style={{width : 200}} />
            <div dangerouslySetInnerHTML={{__html : props.job.description}}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleUrl} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}