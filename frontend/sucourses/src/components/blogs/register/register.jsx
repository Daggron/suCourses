import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button , Typography} from '@material-ui/core';
import axios from 'axios';
import AlertBox from '../../add-course/courseAdded';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "70vw",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "70vw"
  },
}));

export default function Register() {

    
    function Heading(){
        return(
          <React.Fragment>
            <Typography component="h1" variant="h2">
                Register
            </Typography>
          </React.Fragment>
        )
    }
    
  
        const classes = useStyles();
    
        const [added , setAdded] = React.useState("");
        //eslint-disable-next-line
        const [title , settitle ] = React.useState("");
        const [category , setCategory ] = React.useState("");
        const [password , setPassword ]  = React.useState("");
        const [extra , setextra] = React.useState("");
    
        const [open, setOpen] = React.useState(false);
        const [alerttitle, setAlertTitle] = React.useState("");
 
        const handleTitleChange= (event) =>{
            settitle(event.target.value);
        }
    
      
    
        const handleCategory = (e)=>{
            console.log(e.target.value);
            setCategory(e.target.value);
        }
    
    
        const handleSubmit = (e)=>{
            e.preventDefault();
            const data ={
                    username:title,
                    email:category,
                    password:password
            }
    
            axios.post('/user/register',data)
                        .then((res)=>{
                            console.log(res.data);
                            if(res.data.success === true){
                                console.log(true);
                                setAlertTitle("Hurray");
                                setAdded("Register Successful");
                                setextra("Login and Try Writing Some articles")
                                setOpen(true);
                            }
                            else{
                                setAlertTitle(
                                    "Error"
                                )
                                setAdded("Registeration Failed");
                                setextra("User with that email already exists .Please Try Login");
                                setOpen(true);
                            }
                        
            })
            .catch((err)=>{
                setAdded("Internal Server Error");
                setextra("The Report has been send to the backend developer and will be fixed soon");
                setAlertTitle("Error")
                setOpen(true);
    
            })
    
            // console.log(data);
                
            
        }
        

        const handlePassword = e =>{
            setPassword(e.target.value);
        }
    
       
        const handleClose = () => {
            setOpen(false);
        };
    
        return (
            <React.Fragment>
                <AlertBox open={open} title={alerttitle}  handleClose={handleClose} added={added} extra = {extra}/>
                <Heading />
                <form onSubmit={handleSubmit} method="POST" className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                        id="standard-error-helper-text"
                        label="Username"
                        name="Username"
                        helperText="Enter Username here"
                        onChange={handleTitleChange}
                        />
                   </div>
                   <div>
                        <TextField
                        id="standard-error-helper-text"
                        label="Email"
                        name="Email"
                        helperText="Enter Email here"
                        onChange={handleCategory}
                        />
                   </div>
                   <div>
                        <TextField
                        id="standard-error-helper-text"
                        label="Password"
                        helperText="Enter Password Here"
                        type="password"
                        onChange={handlePassword}
                        />
                   </div>
                  
                 
                    <Button type="submit" variant="contained" color="primary" style={{marginBottom:30}}>
                        Add Course 
                    </Button>
                    
                </form>
            
            </React.Fragment>
        )
    
    
}
