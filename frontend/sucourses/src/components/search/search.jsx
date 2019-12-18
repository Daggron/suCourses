import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import book from '../../book.gif';
import notfound from '../../404.gif';
import { Typography } from '@material-ui/core';
import Course from '../courses/course';




export default function Search(props){
const x = queryString.parse(props.location.search);
const y = x.search;
const [search , setSearch] = React.useState(y);
const [courses , setCourses ] = React.useState([]);
const [loaded , setLoaded ] = React.useState(false);


React.useEffect(()=>{
    const q = queryString.parse(props.location.search);
    const newsearch = q.search;
    axios.get(`http://localhost:5000/courses/search/${newsearch}`)
   .then(res=>{
       console.log(res.data);
       setCourses(res.data.courses);
       setLoaded(true);
   })
   //eslint-disable-next-line
},[search])


    const q = queryString.parse(props.location.search);
    const freshcategory = q.search;

    if(freshcategory!==search){
        setSearch(search);
    }

    if(!loaded){
        return (
            <React.Fragment>
                    <img src={book} alt="Loading" />
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
                <Typography style={{marginTop: 5}}variant="h6" component="h2" color="secondary">
                            Sorry no course found . If you know a super course please feel free to add.
                </Typography>
            </React.Fragment>   
        )
    }
    return (
        <React.Fragment>                
                <div className="course">
                        {courses.map(course=>{
                            return(
                                <div key={course._id} style={{width:345,margin: "3%" , float:"left"}}>
                                    <Course courses={course}/>
                                </div>
                            )
                        })}
                </div>
        </React.Fragment>
    )

}
