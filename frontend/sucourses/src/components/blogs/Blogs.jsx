import React from 'react'
import Axios from 'axios';
import Blog from './Blog';

export default function Blogs() {

    const [question , getQuestions ] = React.useState([]);

    React.useEffect(()=>{
        Axios.get('/user/blog')
        .then(res=>{
            console.log(res.data.blog);
            getQuestions(res.data.blog);
        })
        .catch(err=>{
            alert (err);
        })
    },[])

    return (
        <div style={{display  : "flex" , justifyContent : "space-between" , alignContent : "space-between" , margin : "30"}}>
            {
                question.map(eachQuestion=>{
                    return(
                        <div key={eachQuestion._id}>
                        <Blog  id={eachQuestion._id} user={eachQuestion.user} userid={eachQuestion.userid} title={eachQuestion.title} question={eachQuestion.question} />
                        </div>
                    )
                })
            }
        </div>
    )
}
