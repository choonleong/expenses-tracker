//model imports
const httpStatus = require("http-status");
const recordModel = require("../models/record");

// controllers

// const newRecord = async (req, res) => {
//   //req separation
//   const { user } = new recordModel(req.body);

//   try {
//     //check if req is empty;
//     if (!user)
//       return res.status(400).json({
//         msg: "Please fill in all fields",
//       });

//     const newRecord = new recordModel({
//       user: user,
//     });

//     await newRecord.save();

//     return res.json({
//       msg: "New transaction has been successfully added!",
//     });
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// };
const data = [];

const newRecord = async (req, res) => {
  data.push(req.body);
  return res.json({ msg: "New transaction has been successfully added!" });
};

const readAll = (req, res) => {
  if (data.length > 0) {
    return res.json(data);
  }
  return res.sendStatus(httpStatus.NOT_FOUND);
};

module.exports = { newRecord, readAll };
