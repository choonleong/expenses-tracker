//model imports
const httpStatus = require("http-status");
const recordModel = require("../models/record");

const data = [];

// controllers
const addRecord = async (req, res) => {
  try {
    const newTransaction = new recordModel(req.body);
    await newTransaction.save();
    return res.json({ msg: "New transaction has been succesfully added!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// const data = [];

// const newRecord = async (req, res) => {
//   data.push(req.body);
//   return res.json({ msg: "New transaction has been successfully added!" });
// };

const readAll = (req, res) => {
  if (data.length > 0) {
    return res.json(data);
  }
  return res.sendStatus(httpStatus.NOT_FOUND);
};

module.exports = { addRecord, readAll };
