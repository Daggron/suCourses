import React from 'react'
import queryString from 'query-string';
import axios from 'axios'
import book from '../../book.gif';
import notfound from '../../404.gif';
import { Typography } from '@material-ui/core';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const Course = Loadable({
    loader : ()=> import('./course'),
    loading : Loading
})


export default function Courses(props){
    
    const data = queryString.parse(props.location.search);
    const xyz = data.search

    const [category , setCategory] = React.useState(xyz);
    const [courses , setCourses ] = React.useState([]);
    const [loaded , setLoaded ] = React.useState(false);
  

    React.useEffect(()=>{
        const q = queryString.parse(props.location.search);
        const freshcategory = q.category;
        axios.get(`http://localhost:5000/courses/category/${freshcategory}`)
       .then(res=>{
           setCourses(res.data.courses);
           setLoaded(true);
       })
       //eslint-disable-next-line
    },[category])


        const q = queryString.parse(props.location.search);
        const freshcategory = q.category;

        if(freshcategory!==category){
            setCategory(freshcategory);
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
