const mongoose = require('mongoose');
const Course = require('../../api/models/courses.models');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

async function fetchCourses(){
    Course.find({})
    .select('_id title instructor Category Language Level url value description')
    .sort({
        title:1
    })
    .exec()
    .then(async (res)=>{
        console.log(`Fetched ${res.length} courses`);
        const data =await JSON.stringify(res);
        const success = await setAsync('courses',data);
        await res.map(each=>{
            const id = each._id;
            const str = id.toString();
            setAsync(str,JSON.stringify(each));
        })
        console.log({success});
    })
    .catch(err=>{
        console.log(err);
    })
    
}

module.exports = fetchCourses;