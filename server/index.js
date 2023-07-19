const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB");
const { router: DataRouter } = require("./routes/data");

//config dotenv files
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/addrecord", DataRouter);

//port and listening server
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Listening to port ${port}`));
