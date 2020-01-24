import React from 'react'
import { Card, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Blog(props) {
    return (
        <div>
            <Card style={{marginTop : 10 , width : '30vw' , height : '300px'}}>
                <Typography style={{marginTop : 15}}>
                    {props.title}
                </Typography>
                <sub>
                    {props.user.username}
                </sub>
                <div dangerouslySetInnerHTML={{__html : props.question}} />
                <Link to={`questions/view/${props.id}`}>
                    <Button>
                        Read Full Article
                    </Button>
                </Link>
            </Card>
        </div>
    )
}
