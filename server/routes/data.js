const express = require("express");
const router = express.Router();

//controller import
const { addData, fetchAllData } = require("../controllers/dataController");

//routers
// router.post("/newrecord", newRecord);
router.get("/fetchAllData", fetchAllData);
router.post("/addData", addData);

module.exports = { router };
