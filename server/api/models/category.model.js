const mongoose = require('mongoose');
let categorySchema = new mongoose.Schema({
    title:{
        type:String
    },
    icon:{
        type:String
    }
});

let Category = mongoose.model('Category',categorySchema);

module.exports = Category;