const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const Category = require('../models/category.model');
exports.all = async (req,res)=>{
    const raw = await JSON.parse(await getAsync('categories'));
    if(raw.length!==0){
        return res.status(200).json({
            categories:raw
        })
    }else{
        Category.find()
        .select('_id title icon')
        .exec()
        .then(async (categories)=>{
            const success = await setAsync('categories',JSON.stringify(categories));
            return res.json({
                categories:raw
            })
        })
    }
}

exports.post = async (req,res)=>{
    const category = new Category();
    category.title = req.body.title;
    category.icon = req.body.icon;
    category.save()
    .then(async ()=>{
        const raw = await JSON.parse(await getAsync('categories'));
        const data = [...raw];
        data.push(category);
        const categories = await JSON.stringify(data);
        const success = await setAsync('categories',categories);
        console.log({success});
        res.json({
            msg:"OK"
        })
    })
}