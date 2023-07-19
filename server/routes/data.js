const express = require("express");
const router = express.Router();

//controller import
const {
  addData,
  fetchAllData,
  deleteData,
} = require("../controllers/dataController");

//routers
// router.post("/newrecord", newRecord);
router.get("/fetchAllData", fetchAllData);
router.post("/addData", addData);
router.post("/deleteData", deleteData);

module.exports = { router };
