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
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    const isMath = await bcrypt.compare(password, user.password);
    console.log(isMath);
    if (isMath) {
      return res.status(200).json({
        success: true,
        user,
      });
    }
    return res.status(404).json({
      success: false,
      data: "password incorrect",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
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
