const cronJob = require('node-cron');
const fetchCourses = require('./tasks/fetch-courses');
const fetchCategories = require('./tasks/fetch-category');

async function cron(){

cronJob.schedule('* * * * *',()=>{
    console.log('Fetching data from db every minute');
    fetchCourses();
    fetchCategories();
})

}
module.exports = cron;