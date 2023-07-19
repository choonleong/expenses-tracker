const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  // userid: { type: String, required: [true, "User cannot be empty"] },
  amount: { type: Number, required: true },
  // type: { type: String, required: true },
  // category: { type: String, required: true },
  // reference: { type: String, required: true },
  // description: { type: String, required: true },
  // date: { type: Date, required: true },
});

const recordModel = mongoose.model("Records", recordSchema);

module.exports = recordModel;
