const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');

const fetchCourses = require('./server/workers/index');

const URI = process.env.DB;
mongoose.connect(URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection;
db.once('open',()=>{
    console.log('MongoDb Running');
});

db.on('error',(err)=>{
    console.log(err);
});

app.use(expressSession({
    secret : 'Its a secret bro',
    saveUninitialized : true,
    resave : true
}))

app.use(express.json());

app.use(cors());

fetchCourses();

app.use(passport.initialize());
app.use(passport.session());

app.use('/courses',require('./server/api/routes/courses.routes'));
app.use('/categories',require('./server/api/routes/category.routes'));
app.use('/user',require('./server/api/routes/user.routes'));
app.use('/jobs',require('./server/api/routes/jobs.routes'));

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`running fine on ${port}`);
});