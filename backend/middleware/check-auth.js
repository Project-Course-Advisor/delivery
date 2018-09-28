const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
     const token = req.headers.authorization.split(' ')[1];
     jwt.verify(token, 'secret_this_should_be_longer_because_we_want_to_make_this_awesome_secure');
     console.log(token);
     next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
}
