//model imports
const httpStatus = require("http-status");
const recordModel = require("../models/record");
const moment = require("moment");

// controllers
const addData = async (req, res) => {
  try {
    const newTransaction = new recordModel(req.body);
    await newTransaction.save();
    return res.json({ msg: "Record has been successfully added!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    // const id = req.body.transactionID;
    await recordModel.findOneAndDelete({ _id: id });
    return res.json({ msg: "Record has been deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const editData = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    const updatedRecord = await recordModel.findByIdAndUpdate(
      id,
      payload.data,
      {
        new: true,
      }
    );

    if (!updatedRecord) {
      return res.status(404).json({ error: "Record not found" });
    }

    return res.json({ msg: "Record has been updated!", data: updatedRecord });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update data" });
  }
};

const fetchAllData = async (req, res) => {
  try {
    const { timeline } = req.body;

    let query = [];

    if (timeline !== "all") {
      query = {
        date: {
          $gt: moment().subtract(Number(timeline), "d").toDate(),
        },
      };
    }

    const data = await recordModel.find(query);
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
};

module.exports = { addData, fetchAllData, deleteData, editData };
