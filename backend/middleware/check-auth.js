const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
     const token = req.headers.authorization.split(' ')[1];
     const decoder = jwt.verify(token, 'secret_this_should_be_longer_because_we_want_to_make_this_awesome_secure');
     req.userData = { email: decoder.email, userId: decoder.userId};
     next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
}
