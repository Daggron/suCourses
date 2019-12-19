import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import notfound from '../../404.gif';
import { Typography } from '@material-ui/core';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const Course = Loadable({
    loader : ()=>import('../courses/course'),
    loading : Loading
})




export default function Search(props){

    const x = queryString.parse(props.location.search);
    const y = x.search

    const [search , setSearch] = React.useState(y);
    const [courses , setCourses ] = React.useState([]);
    const [loaded , setLoaded ] = React.useState(false);

    React.useEffect(()=>{
        
        axios.get(`/courses/search/${search}`)
        .then(res=>{
            setCourses(res.data.courses);
            setLoaded(true);
        })
        //eslint-disable-next-line
        },[search])

    

    if(y!==search){
        setSearch(y);
    }

    if(!loaded){
        return (
            <React.Fragment>
                  
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
