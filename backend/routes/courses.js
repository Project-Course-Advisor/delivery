const express = require('express');

const router = express.Router();

const Course = require('../models/course');

router.post("/api/courses", (req, res, next) => {
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

router.post("/api/sub_courses", (req, res, next) => {
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

router.get('/api/courses',(req, res, next) => {
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

router.get('/api/subcourses',(req, res, next) => {
  Subcourse.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched successfully!",
      subcourses: documents
    });
  });
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

router.get("/api/courses/:id", (req, res, next) => {
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
    res.status(200).json({message: 'Uodate successful!'});
  })
});

module.exports = router;
