const express = require("express");
const router = express.Router();

//controller import
const {
  addData,
  fetchAllData,
  deleteData,
  editData,
} = require("../controllers/dataController");

//routers
router.post("/fetchAllData", fetchAllData);
router.post("/addData", addData);
router.delete("/deleteData/:id", deleteData);
router.put("/editData/:id", editData);

module.exports = { router };
