const express = require("express");
const { signIn, signUp } = require("../controllers/userController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/signin", signIn);

//POST || REGISTER USER
router.post("/signup", signUp);

module.exports = { router };
