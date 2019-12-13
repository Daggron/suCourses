import React, { Component } from 'react'
import queryString from 'query-string';
import axios from 'axios'
import book from '../../book.gif';
import Course from './course';


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
