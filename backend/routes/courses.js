const express = require('express');

const router = express.Router();
const checkAuth = express('../middleware/check-auth.js');

const Course = require('../models/course');

router.post("/api/courses", (req, res, next) => {
  const course = new Course({
    title: req.body.title,
    content: req.body.content
  });
 course.save().then(result => {
 // console.log(course);
  res.status(201).json({
    message: 'Post added sucessfully',
    courseId: createdCourse._id
   });
  });
});

router.get('/api/courses', checkAuth, (req, res, next) => {
  //console.log(checkAuth);
  Course.find()
  .then(documents => {
   // console.log(checkAuth);
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


router.delete("/api/courses/:id", (req, res, next) => {
  console.log(req.params.id);
  Course.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Course deleted!"
    });
  });
});

router.get("/api/courses/:id", checkAuth, (req, res, next) => {
  Course.findById(req.params.id).then(post => {
    if (course) {
      res.status(200).json(course);
    }else {
      res.status(404).json({ message: 'Course/Program not found!'})
    }
  })
});

router.put("/api/course/:id", (req, res, next) => {
const course = new Course({
  _id: req.body._id,
  title: req.body.title,
  content: req.body.content
});
  Course.updateOne({_id: req.param.id }, course).then (result => {
    console.log(result);
    res.status(200).json({message: 'Update successful!'});
  })
});

module.exports = router;
