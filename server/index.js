const express = require("express");
// const { router } = require("./routes/data");
const { router: DataRouter } = require("./routes/data");
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

//route imports

//routes

const app = express();
const port = process.env.PORT || 3333;
// const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(express.json());
app.use("/newrecord", DataRouter);
app.listen(port, () => console.log(`Listening to port ${port}`));
