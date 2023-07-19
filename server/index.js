const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB");

//route imports
const { router: DataRouter } = require("./routes/data");

//rest object, config dotenv files and database call
const app = express();
dotenv.config();
connectDb();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/data", DataRouter);

//port and listening server
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Listening to port ${port}`));
