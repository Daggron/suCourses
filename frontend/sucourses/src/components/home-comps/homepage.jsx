import React from 'react'
import booking from '../../img1.png';
import {  Button } from '@material-ui/core';
import { Link } from 'react-router-dom'



export default function Homepage() {
    
    return (
        <React.Fragment>
            <div className="homepage">
                <div className="left">
                    <h1 className="heading-text">
                        The Super Courses
                        <br>
                        </br>
                        Resource
                    </h1>
                    <p className="small-text" style={{marginTop: 5}}>
                       Super Courses is a platform to list all the amazing courses on the internet related to programming. A coummunity managed platform to give the users the best courses that is availabel on the web.
                       if you know a supercourse please feel free to add it to our platform.
                       <br/>
                       Happy Hacking 😃
                       <br/>
                    </p>

                    <div style={{marginTop: 20}}>
                        <Link to="/course">
                            <Button variant="contained" color="#f5f5f5" style={{margin : 15}}>
                            View Course
                            </Button>
                        </Link>

                        <Link to="/add">
                            <Button variant="contained" color="#f5f5f5" style={{margin: 15}}>
                                Add Course
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <img src={booking} alt="book read"/>
                </div>
            </div>
        </React.Fragment>
    )
}
