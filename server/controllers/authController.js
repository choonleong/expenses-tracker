// authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./userModel");
const secretKey = process.env.SECRET_KEY;

async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Sign the JWT token with the SECRET_KEY from environment variables
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "1h" });

    res.json({ token, userId: user._id }); // Include user's ID in the response
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { signIn };
