const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017";

mongoose.set("debug", true);

const options = {
  autoIndex: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
  useNewUrlParser: true, // Adding this option for compatibility
  useUnifiedTopology: true,
};

async function connectDB() {
  try {
    if (mongoose.connection.readyState != 1) {
      await mongoose.connect(dbURI, options);
      console.log("Database Connect!");
    } else {
      console.log("Dtabase Already connect");
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = { connectDB };
