import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import AlertDialogSlide from './dialoug';
import {Button} from '@material-ui/core'

export default function Job(props) {
    const [open, setOpen] = React.useState(false);
    const [oneJob , setJob] = React.useState({});

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const selectJob = e =>{
        setJob(e);
    }
    return (
        <React.Fragment>
            <AlertDialogSlide job={oneJob} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
            <Card style={{width : 300 , margin : 15 , height : 230}}>
                <CardContent>
                    <Typography style={{marginTop : 15}}>
                       Title : {
                            props.job.title
                        }
                    </Typography>
                    <Typography style={{marginTop : 15}}>
                        Company : {
                            props.job.company
                        }
                    </Typography>
                    <Typography style={{marginTop : 15}}>
                        Type : {
                            props.job.type
                        }
                    </Typography>
                    <Button variant="contained" color="primary" style={{marginTop : 10}} onClick={()=>{
                       selectJob(props.job);
                        setOpen(true)
                    }}>
                        View
                    </Button>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
