import React from 'react'
import error from '../404.gif'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <React.Fragment>
            <Box>
                <Typography color="secondary" component="h4" variant="h1">
                    Error 404
                </Typography>
                <Typography variant="h6">
                    Page not found
                </Typography>
                <img src={error} alt="Error 404"/>
                <Typography color="secondary" component="h2" variant="h6">
                    Ooopsie the page you are requesting for doesn't exist 
                    <br/>
                    Go Back to home page <Link to="/">Home</Link> or <Link to="/course">Courses</Link>
                </Typography>
            </Box>
        </React.Fragment>
    )
}