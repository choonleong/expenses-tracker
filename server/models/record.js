const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  // _id: mongoose.ObjectId,
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  reference: { type: String, required: true },
  date: { type: Date, required: true },
});

const recordModel = mongoose.model("Record", recordSchema);

module.exports = recordModel;
