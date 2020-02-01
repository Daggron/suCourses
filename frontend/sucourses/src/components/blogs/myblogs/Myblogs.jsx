import React from 'react'
import Axios from 'axios';
import Blog from '../Blog';

export default function Myblogs() {
    
    const [question , getQuestions ] = React.useState([]);

    React.useEffect(()=>{
        Axios.get('http://localhost:5000/user/blog')
        .then(res=>{
            console.log(res.data.blog);
            getQuestions(res.data.blog);
        })
        .catch(err=>{
            alert (err);
        })
        console.log('I am workign')
    },[])

    if(question.length!==0){
    return (
        <div style={{display  : "flex" , justifyContent : "center" , alignContent : "center" , margin : "auto" , flexWrap : "wrap" , flexDirection : "column" , width : "1200px" }}>
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
    }else{
        return(
            <h1>
                Loading...
            </h1>
        )
    }
}
