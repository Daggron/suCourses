import React from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditorComponent() {

    const [question , setquestion] = React.useState("");

    const [user , setUser] = React.useState({});

    const [title , setTitle] = React.useState("");

    const handleChange = e =>{
        console.log(e);
        setquestion(e);
    }

    const handleTitle = e=>{
        setTitle(e.target.value);
    }

    const handleSubmit =() =>{
        console.log(question);
        Axios.post('/user/blog',{question:question,title : title , token : user})
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
     const  formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

    React.useEffect(()=>{
        let data = localStorage.getItem('token');
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
                onChange={handleTitle}
                />
            <br/>
            <Typography style={{marginTop: 40}} variant="h5" component="h3">
                Type the blog below
            </Typography>

            <div>
            <ReactQuill theme="snow"
                    modules={modules}
                    formats={formats}
                    style={{height : 500 , width : window.innerWidth }}
                    onChange={handleChange}
            >
            </ReactQuill>
            </div>
            
            <Button onClick={handleSubmit} color="primary" variant="contained">
                Save
            </Button>
        </div>
    )
    }
}
