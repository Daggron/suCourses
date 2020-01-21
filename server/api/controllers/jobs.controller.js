const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);


exports.jobs = async (req,res)=>{
    const data = await getAsync('github');
    const jobs = await JSON.parse(data);
    res.json({
        jobs : jobs
    });
} 