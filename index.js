const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// main file
const EmplyeeRoute = require('./router/employee');
const { connectDB } = require("./Dbconnect");

const app = express();

// mongoose.connect("mongodb://localhost:27017/mydb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // serverSelectionTimeoutMS: 5000, // Adjust this timeout value
// });


// const db = mongoose.connection;

// db.on("error", (err) => {
//   console.log(err);
// });

// db.on("open", () => {
//   console.log("Database Connection Established!");
// });
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is the home route!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`server is running port ${PORT}`);
  await connectDB();
});

app.use("/api/employee", EmplyeeRoute);
