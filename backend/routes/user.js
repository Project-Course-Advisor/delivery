const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/causer');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    university: req.body.university,
    email: req.body.email,
    password: hash
    });
    user.save()
    .then(result => {
      res.status(201).json({
        message: 'user added successfully',
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
  });
});

router.post("/login", (req, res, next) => {
  let fetechedUser, userP;
  console.log(req.body);
  User.find({ email: req.body.email })
  .then(user => {
    if (!user) {
      return res.status(401).json({
        message: "Authentication failed"
      });
    }
    fetechedUser = user;
    fetechedUser.forEach(hello => {
      userP = hello;
    });
   // console.log(fetechedUser);
   // console.log(fetechedUser.password);
    return bcrypt.compare(req.body.password, userP.password);
  })
  .then(result => {
    if (!result) {
      return res.status(401).json({
        message: "Authentication failed"
      });
    }
    const token = jwt.sign({email: userP.email, userId: userP._id, userName: userP.first_name, userUni: userP.university}
      , 'secret_this_should_be_longer_because_we_want_to_make_this_awesome_secure',
      { expiresIn: "1h" });
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: userP._id
      });
  })
  .catch(err => {
    console.log(err);
    return res.status(401).json({
      message: "Authentication failed"
  });
});
});
module.exports = router;
