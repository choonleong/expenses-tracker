// authMiddleware.js
const jwt = require("jsonwebtoken");
const secretKey = require("dotenv");

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token." });
    }

    req.userId = decoded.id;
    next();
  });
}

module.exports = { verifyToken };
