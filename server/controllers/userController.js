const userModel = require("../models/user");

//Validate email address
const validateEmailAdress = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//sign in to existing account
const signIn = async (req, res) => {
  try {
    const result = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//sign up for new account
const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password)
      return res.status(400).json({ msg: "Please fill in all fields." });
    // check if email adress is valid
    if (!validateEmailAdress(email))
      return res.status(400).json({ msg: "Invalid email adress." });
    // check password length
    if (password.length < 9)
      return res
        .status(400)
        .json({ msg: "Password must be at least 9 characters." });

    //TODO: check if the email is exist

    const newUser = new userModel({
      name,
      email,
      password,
    });
    await newUser.save();
    return res.json({
      msg: "You have successfully registered!",
    });
    // }
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = { signIn, signUp };
