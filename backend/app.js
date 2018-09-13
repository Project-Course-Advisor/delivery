const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');

const Course = require('./models/course');
const Subcourse = require('./models/subcourse');

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
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/courses", (req, res, next) => {
  const course = new Course({
    title: req.body.title,
    content: req.body.content
  });
 course.save().then(result => {
  console.log(course);
  res.status(201).json({
    message: 'Post added sucessfully',
    courseId: createdCourse._id
   });
  });
});

app.post("/api/sub_courses", (req, res, next) => {
  const sub_course = new Subcourse({
    title: req.body.title,
    content: req.body.content,
    uni: req.body.uni,
    course_id: req.body.course_id
  });
 sub_course.save().then(result => {
  console.log(sub_course);
  res.status(201).json({
    message: 'Post added sucessfully',
    // subcourseId: createdCourse._id
   });
  });
});

app.get('/api/courses',(req, res, next) => {
  Course.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched successfully!",
      courses: documents
    });
  });
  // const courses = [
  //   {
  //     id: "dew3qer2wed",
  //     title: "Bachelors Program",
  //     content: "Your career begins here"
  //   },
  //   {
  //     id: "sd352fsdrw",
  //     title: "Masters Program",
  //     content: "Your career gets tailored"
  //   },
  //   {
  //     id: "sed3423rdf",
  //     title: "Doctral Program",
  //     content:'Expertise of your own field'
  //   }
  // ]

});

app.get('/api/subcourses',(req, res, next) => {
  Subcourse.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched successfully!",
      subcourses: documents
    });
  });
});

app.delete("/api/courses/:id", (req, res, next) => {
  console.log(req.params.id);
  Course.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Course deleted!"
    });
  });
});

app.get("/api/courses/:id", (req, res, next) => {
  Course.findById(req.params.id).then(post => {
    if (course) {
      res.status(200).json(course);
    }else {
      res.status(404).json({ message: 'Course/Program not found!'})
    }
  })
});

app.put("/api/course/:id", (req, res, next) => {
const course = new Course({
  _id: req.body._id,
  title: req.body.title,
  content: req.body.content
});
  Course.updateOne({_id: req.param.id }, course).then (result => {
    console.log(result);
    res.status(200).json({message: 'Uodate successful!'});
  })
});
module.exports = app;
