import React from 'react';
import { Typography } from '@material-ui/core'
import Book from '../book.gif'

export default function Loading(){
    return (
        <React.Fragment>
            <img src={Book} alt="Loading ... " />
            <Typography variant="h5" component="h1">
                Please wait while we are loading Data    
            </Typography> 
        </React.Fragment>
    )
}