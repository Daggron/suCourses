import React from 'react'
import { Card, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Blog(props) {
    const converter = (e)=>{
        console.log(e);
        return({
            __html : e.question
        })
    }
    return (
        <div>
            <Card color="#1b1b1b" style={{marginTop : 50 , marginBottom : 20 , width : '100%' , height : '100%' , padding : "20px"}}>
                <Typography style={{marginTop : 15}} variant="h5">
                    {props.title}
                </Typography>
                <sub style={{fontSize : 15 , color :"red"}}>
                   by {props.user.username}
                </sub>
                <div dangerouslySetInnerHTML={converter(props.question)} />
                <Link to={`articles/view/${props.id}`}>
                    <Button variant="contained" style={{marginTop : "20px" , textDecoration : "none"}}>
                        Read Full Article
                    </Button>
                </Link>
            </Card>
        </div>
    )
}
