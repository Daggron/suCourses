import React, { Component } from 'react'
import queryString from 'query-string';
import axios from 'axios'
import book from '../../book.gif';
import Course from './course';
import notfound from '../../404.gif';
import { Typography } from '@material-ui/core';


export default class Courses extends Component {
    
   constructor(){
       super();
       this.state={
           courses : [],
           loaded :  false
       }
        
   }
    componentDidMount(){
        const q = queryString.parse(this.props.location.search);
       const category = q.category;
       axios.get(`http://localhost:5000/courses/category/${category}`)
       .then(res=>{
           console.log(res.data);
           this.setState({
               courses : res.data.courses,
               loaded : true
           })
       })
    }
    render() {
        if(!this.state.loaded){
            return (
                <React.Fragment>
                        <img src={book} alt="Loading" />
                        <Typography style={{marginTop: 5}}variant="h6" component="h2" color="secondary">
                                Please be patient while we are loading courses
                        </Typography>
                </React.Fragment>
            )
        }
        else if(this.state.courses.length===0){
            return (
                <React.Fragment>
                    <img src={notfound} alt="No course found" />
                    <Typography style={{marginTop: 5}}variant="h6" component="h2" color="secondary">
                                Sorry no course found . If you know a super course please feel free to add.
                    </Typography>
                </React.Fragment>   
            )
        }
        return (
            <div className="course">
                 {this.state.courses.map(course=>{
                     return(
                         <div key={course._id} style={{width:345,margin: "3%" , float:"left"}}>
                             <Course courses={course}/>
                         </div>
                     )
                 })}
            </div>
        )
    }
}
