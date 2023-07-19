const express = require("express");
const router = express.Router();

//controller import
const { newRecord, readAll } = require("../controllers/dataController");

//routers
// router.post("/newrecord", newRecord);
router.get("/", readAll);
router.post("/", newRecord);

module.exports = { router };
