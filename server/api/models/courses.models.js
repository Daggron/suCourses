let mongoose = require('mongoose');

let courseSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    instructor:{
        type:String,
    },
    Category:{
        type:String,
    },
    Language:{
        type:String,
    },
    Level:{
        type:String,
    },
    url:{
        type:String
    },
    value:{
        type:String
    },
    description:{
        type:String
    }
},{
    timestamps:true
});

let Courses = mongoose.model('Courses',courseSchema);

module.exports = Courses;