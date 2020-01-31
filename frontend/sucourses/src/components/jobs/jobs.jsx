import React from 'react';
import Axios from 'axios';
import Job from './job';



export default function Jobs() {

    
    const [jrDeveloper , setJobs] = React.useState([]);

    React.useEffect(()=>{
        Axios.get('/jobs')
        .then(response=>{
            let data = response.data.jobs;
            setJobs(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);


    return (
        <React.Fragment>
            <div style={{ display : "flex" ,  flex : 1 , justifyContent : "space-between" , alignContent : "space-between" , alignItems : "space-between"  , flexWrap : "wrap"}}>
                {
                    jrDeveloper.map( eachJob=> {
                        return(
                            <div key={eachJob.id} >
                                <Job  job={eachJob} />
                            </div>
                        )
                    } )
                }
            </div>
        </React.Fragment>
    )
}
