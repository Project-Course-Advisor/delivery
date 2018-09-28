const express = require('express');

const router = express.Router();
//const checkAuth = express('../middleware/check-auth.js');

const Subcourse = require('../models/subcourse');

router.post("/courses", (req, res, next) => {
  const subcourse = new Subcourse({
    title: req.body.title,
    content: req.body.content,
    uni: req.body.uni,
    course_id: req.body.cid
  });
 subcourse.save().then(result => {
  console.log(subcourse);
  res.status(201).json({
    message: 'Post added sucessfully',
    //courseId: createdSubcourse._id
   });
  });
});

router.get("/courses/:id", (req, res, next) => {
  Subcourse.find({course_id: req.params.id}).then(post => {
    console.log(post);
    if (post) {
      res.status(200).json({message:'Successful', subcourse: post});
    }else {
      res.status(404).json({ message: 'Course/Program not found!'})
    }
  })
});

module.exports = router;
