const cronJob = require('node-cron');
const fetchCourses = require('./tasks/fetch-courses');

async function cron(){

cronJob.schedule('* * * * *',()=>{
    console.log('Fetching data from db every minute');
    fetchCourses();
})

}
module.exports = cron;