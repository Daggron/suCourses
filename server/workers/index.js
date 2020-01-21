const cronJob = require('node-cron');
const fetchCourses = require('./tasks/fetch-courses');
const fetchCategories = require('./tasks/fetch-category');
const fetchJobs = require('./tasks/fetch-jobs');

async function cron(){

    cronJob.schedule('* * * * *',()=>{
        console.log('Fetching data from db every minute');
        fetchCourses();
        fetchCategories();
        fetchJobs();
    })

}
module.exports = cron;