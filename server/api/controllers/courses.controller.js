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

exports.id = async (req,res)=>{
    const raw = await getAsync(req.params.id);
    if(raw){
        const course = await JSON.parse(raw);
        res.json({
            course
        })
    }
    else{
        Course.findById(req.params.id)
        .select('_id title instructor Category Language Level url value description')
        .exec()
        .then(course=>{
            setAsync(req.params.id , JSON.stringify(course));
            res.json({
                course
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
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
    const raw = JSON.parse(await getAsync('courses'));
    const  courses = raw.filter((eachCourse)=>{
        const title =  eachCourse.title.toLowerCase().replace(/\s/g,'');
        const instructor = eachCourse.instructor.toLowerCase().replace(/\s/g,'');
        const Category = eachCourse.Category.toLowerCase().replace(/\s/g,'');
        if(
            title.includes(req.params.search.toLowerCase().replace(/\s/g,''))
            ||
            instructor.includes(req.params.search.toLowerCase().replace(/\s/g,''))
            ||
            Category.includes(req.params.search.toLowerCase().replace(/\s/g,''))
        ){
            return eachCourse;
        }
        return false;
    })
    return res.json({
        data:courses
    })
    
}
