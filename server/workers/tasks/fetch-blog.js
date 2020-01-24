const query = require('../../api/models/query.model');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

async function fetchBlog(){
    query.find({})
    .select('_id , userid , user , title , question')
    .exec()
    .then(async (data)=>{
        const raw = await JSON.stringify(data);
        const success = await setAsync('blog',raw);
        console.log(success);
        console.log(`Fetched ${data.length} blogs`);
        data.map(async (singleBlog)=>{
            let id = singleBlog._id;
            let key = id.toString();
            await setAsync(key , JSON.stringify(singleBlog));

        })
    })
}

module.exports = fetchBlog;