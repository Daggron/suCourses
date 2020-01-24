const mongooose = require('mongoose');

const schema = new mongooose.Schema({
    userid : {
        type :String
    },
    user :{
        type : Object
    },
    question : {
        type : String,
    },
    reply : {
        type : Array
    }
});

const question = mongooose.model('question',schema);

module.exports = question;