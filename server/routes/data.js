const express = require("express");
const router = express.Router();

//controller import
const { addRecord, readAll } = require("../controllers/dataController");

//routers
// router.post("/newrecord", newRecord);
router.get("/", readAll);
router.post("/", addRecord);

module.exports = { router };
