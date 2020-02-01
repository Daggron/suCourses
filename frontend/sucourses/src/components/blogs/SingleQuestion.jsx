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
            console.log(data.data.blog)

        })
        .catch(err=>{
            alert(err);
        })
        //eslint-disable-next-line
    },[])

    return (
        <div style={{width : 900 , height : "auto" , fontSize : "20px" , margin : "auto" , textAlign : "left" , textDecoration : "none" , background : "#f5f5f5"}}>
            <Typography component="h1" variant="h3" style={{margin : 20}}>
                {blog.title}
            </Typography>
            <Typography>
                <sub style={{marginTop : 20 ,margin : 20 , color :"red" }} >
                    by {uploader.username}
                </sub>
            </Typography>
           
            <div style={{margin : 10}}>
                 <div dangerouslySetInnerHTML={{__html : blog.question}} />
            </div>
            
           
        </div>
    )
}
