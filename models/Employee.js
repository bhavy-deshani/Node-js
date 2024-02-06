const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  age: { type: Number },
  designation: { type: String }, // Check the spelling
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
