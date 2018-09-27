const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');

const coursesRoutes = require('./routes/courses');
const userRoutes = require('./routes/user')
const subcourseRoutes = require('./routes/subcourse');

const app = express();

mongoose.connect("mongodb://deakincourseadvisor:deakincourse@cluster0-shard-00-00-rvn0j.mongodb.net:27017,cluster0-shard-00-01-rvn0j.mongodb.net:27017,cluster0-shard-00-02-rvn0j.mongodb.net:27017/course-advisor?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true })
.then(() => {
  console.log('Connected to Database')
})
.catch(() => {
  console.log('Connection failed')
});

app.use(bodyparser.urlencoded({
  extended: true
}));

//app.use(bodyparser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use(coursesRoutes);

app.use('/api/user', userRoutes);

app.use('/api/', subcourseRoutes);

module.exports = app;
