import React from 'react';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import Editor from 'react-medium-editor';
import { Typography, Button, TextField } from '@material-ui/core';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function EditorComponent() {

    const [question , setquestion] = React.useState("");

    const [user , setUser] = React.useState({});

    const [title , setTitle] = React.useState("");

    const handleChange = e =>{
        setquestion(e);
    }

    const handleTitle = e=>{
        setTitle(e.target.value);
    }

    const handleSubmit =() =>{
        console.log(question);
        Axios.post('/user/blog',{question:question,title : title})
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    React.useEffect(()=>{
        let data = localStorage.getItem('user');
        setUser(data);
    },[])

    if(!user){
        return(
            <Redirect to="/logger" />
        )
    }else{
    return (
        <div>
            <Typography component="h1" variant="h5">
                Type Your Article
            </Typography>
            <TextField
                component="outlined"
                helperText="Enter Title Of The Blog"
                label="Title"
            onChange={handleTitle}/>
            <br/>
            <Typography style={{marginTop: 40}} variant="h5" component="h3">
                Type the blog below
            </Typography>
            <Editor 
             options={{toolbar: {buttons: ['bold', 'italic', 'underline' , 'h1' , 'h2' ,'h3' ,'h4' ,'h5' ,'h6' ,'anchor']}}}
            onChange={handleChange}
            />
            <Button onClick={handleSubmit} color="primary" variant="contained">
                Save
            </Button>
        </div>
    )
    }
}
