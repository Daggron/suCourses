import React from 'react'
import {TextField, Button} from '@material-ui/core'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { MyContext } from '../../context';
import AlertBox from './AlertBox';


export default function Login() {
    const [email , setEmail ] = React.useState("");
    const [password , setPassword] = React.useState("");
    const [success , setSuccess] = React.useContext(MyContext);
    //eslint-disable-next-line
    const [user , setUser] = React.useContext(MyContext); 
    const [open , setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleEmail = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const HandleLogin = async ()=>{
       let data = await Axios.post('/user/loginrequest',{
            email : email,
            password : password
        })
        setSuccess(data.data.success);
        

        if(!data.data.success){
            setOpen(true);
        }
        else{
            setUser(data.data.user);
            localStorage.setItem('user',data.data.user);
        }
    }

    if(success){
        return(
            <Redirect to="/"/>
        )
    }else{
    return (
        <div>
            <AlertBox open={open} handleClose={handleClose} >
               
                   UserName or Password Do not match
               
            </AlertBox>
            <TextField
                    label="Email"
                    name="email"
                    helperText="Enter Email Here"
                    onChange={handleEmail}  
            />
            <br/>
            <br/>
            <TextField
                    label="Password"
                    type="password"
                    helperText="Enter Password here"
                    onChange={handlePassword}     
            />
            <br/>
            <br/>
            <Button onClick={HandleLogin} variant="contained" color="primary">
                Login
            </Button>
            
        </div>
    )
    }
}
