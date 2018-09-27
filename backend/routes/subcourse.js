const express = require('express');

const router = express.Router();
const checkAuth = express('../middleware/check-auth.js');

const Subcourse = express('../models/subcourse.js');

router.post("/subcourses", (req, res, next) => {
  const subcourse = new Subcourse({
    title: req.body.title,
    content: req.body.content,
    uni: req.body.uni,
    course_id: req.body.cid
  });
  console.log(subcourse);
//  subcourse.save().then(result => {
//   console.log(subcourse);
//   // res.status(201).json({
//   //   message: 'Post added sucessfully',
//   //   courseId: createdSubourse._id
//   //  });
//   });
});

// router.get("/api/subcourses/:id", (req, res, next) => {
//   Subcourse.find({course_id: req.params.id}).then(post => {
//     if (subcourse) {
//       console.log(subcourse);
//       res.status(200).json(subcourse);
//     }else {
//       res.status(404).json({ message: 'Course/Program not found!'})
//     }
//   })
// });

module.exports = router;
