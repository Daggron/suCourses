const Category = require('../../api/models/category.model');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

async function fetchCategory(){
    Category.find()
    .select('_id title icon')
    .exec()
    .then(async (categories)=>{
        console.log(`fetched ${categories.length} categories`);
        const success = await setAsync('categories',JSON.stringify(categories));
        console.log({success});
    })
}

module.exports = fetchCategory;