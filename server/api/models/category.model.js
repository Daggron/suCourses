const mongoose = require('mongoose');
let Category = new mongoose.Schema({
    title:{
        type:String
    },
    icon:{
        type:String
    }
});

let Category = mongoose.model('Category',Category);

module.exports = Category;