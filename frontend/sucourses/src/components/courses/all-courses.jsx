import React from 'react'
import axios from 'axios';
import Course from './course';
import book from '../../book.gif';
import { Typography } from '@material-ui/core';
import notfound from '../../404.gif';

export default function Allcourses() {
    const [courses , setCourses] = React.useState([]);
    const [loaded , setLoaded] = React.useState(false);
    React.useEffect(()=>{
        axios.get('http://localhost:5000/courses/')
        .then((res)=>{
            console.log(res.data);
            setCourses(res.data.courses);
            setLoaded(true);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    if(!loaded){
        return (
            <React.Fragment>
                <img src={book} alt="Loading"/>
                <Typography style={{marginTop: 5}}variant="h6" component="h2" color="secondary">
                         Please be patient while we are loading courses
                 </Typography>
            </React.Fragment>
        )
    }
    else if(courses.length===0){
        return (
            <React.Fragment>
                <img src={notfound} alt="No course found" />
            </React.Fragment>   
        )
    }
    return (
       <React.Fragment>
            <div className="course" style={{width:"100vw"}}>
                 {courses.map(course=>{
                     return(
                         <div key={course._id} style={{width:345,margin: "3%" , float:"left"}}>
                             <Course courses={course} />
                         </div>
                     )
                 })}
            </div>
       </React.Fragment>
    )
}
