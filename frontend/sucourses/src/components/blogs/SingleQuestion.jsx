import React from 'react'
import Axios from 'axios';
import { Typography } from '@material-ui/core';

export default function SingleQuestion(props) {

    const [blog , setBlog] = React.useState({})
    const [uploader , setUploader] = React.useState({});


    React.useEffect(()=>{
        //eslint-disable-next-line
        const id = props.match.params.id;
        Axios.get(`http://localhost:5000/user/blogbyid/${id}`)
        .then(data=>{
            setBlog(data.data.blog);
            setUploader(data.data.blog.user);

        })
        .catch(err=>{
            alert(err);
        })
        //eslint-disable-next-line
    },[])
    return (
        <div>
            <Typography component="h1" variant="h3">
                {blog.title}
            </Typography>
            <Typography>
                <sub style={{marginTop : 20}}>
                    by {uploader.username}
                </sub>
            </Typography>
            <Typography component="h5">
                 <div dangerouslySetInnerHTML={{__html : blog.question}} />
            </Typography>
           
        </div>
    )
}
