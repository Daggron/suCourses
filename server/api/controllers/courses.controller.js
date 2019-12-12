const Course = require('../models/courses.models');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

exports.all = async (req,res)=>{
    const data = await  getAsync('courses');
    const courses = await JSON.parse(data);
    return res.status(200).json({
        courses:courses
    });
}

exports.post = async (req,res)=>{
    const course = new Course();
    course.title = req.body.title;
    course.instructor = req.body.instructor;
    course.Category = req.body.Category;
    course.Language = req.body.Language;
    course.Level = req.body.Level;
    course.url = req.body.url;
    course.value = req.body.value;
    course.description = req.body.description;
    course.save()
    .then(async ()=>{
        const raw = await getAsync('courses');
        const courses = await JSON.parse(raw);
        let data = [];
        if(courses.length!==0){
             data = [...courses];
        }
        data.push(course);
        const nexdata = JSON.stringify(data);
        const success = await setAsync('courses',nexdata);
         return res.json({
             data,
             success
         })
    })
}

exports.search = async(req,res)=>{
    console.log(req.params.search)
    const regex = new RegExp(escapeRegex(req.params.search));
    let courses = [];
    const raw = await getAsync(JSON.stringify(regex));
    const data = await JSON.parse(raw);
    if(data&&data.length!==0){
        const course = [...data];
        return res.json({
            data:course
        })
    }
    else{
        const raw = await JSON.parse(await getAsync('courses'));
        const response = [...raw];
        const courses = response.filter(eachresponse=>{
            console.log('sec')
            if(
                (eachresponse.title.toLowerCase().includes(req.params.search))
                ||
                (eachresponse.Category.toLowerCase().includes(req.params.search))
                ||
                (eachresponse.instructor.toLowerCase().includes(req.params.search))
            ){
                return eachresponse;
            }
            else{
                return false;
            }
        })
        const success =await  setAsync(JSON.stringify(regex),JSON.stringify(courses));
        res.json({
            data:courses
        })
    }
    
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};