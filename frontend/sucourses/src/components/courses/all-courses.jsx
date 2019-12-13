import React from 'react'
import axios from 'axios';
import Course from './course';

export default function Allcourses() {
    const [courses , setCourses] = React.useState([]);
    React.useEffect(()=>{
        axios.get('http://localhost:5000/courses/')
        .then((res)=>{
            console.log(res.data);
            setCourses(res.data.courses);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
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
