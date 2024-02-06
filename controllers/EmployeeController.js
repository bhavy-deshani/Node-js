const Employee = require("../models/Employee");

const index = (req, res) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occurred!",
      });
    });
};

const show = (req, res) => {
  let employeeID = req.params.employeeID; // Use req.params instead of req.body for route parameters
  Employee.findById(employeeID)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json({
        message: "An error Occurred!",
      });
    });
};

// new employee
const store = (req, res) => {
  let employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    designation: req.body.designation,
  });

  employee.save()
    .then(() => {
      res.json({
        message: "Employee Added Successfully!",
      });
    })
    .catch((error) => {
      console.error("Error saving employee:", error);
      res.status(500).json({
        message: "An error occurred!",
        error: error.message,
      });
    });
};



// update employee
const update = (req, res) => {
  let employeeID = req.params.employeeID; // Use req.params instead of req.body for route parameters

  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };
  Employee.findByIdAndUpdate(employeeID, { $set: updateData })
    .then(() => {
      res.json({
        message: "Employee Updated Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occurred!",
      });
    });
};

// delete an employee
const destroy = (req, res) => {
  let employeeID = req.params.employeeID; // Use req.params instead of req.body for route parameters
  Employee.findByIdAndRemove(employeeID)
    .then(() => {
      res.json({
        message: "Employee Deleted Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occurred!",
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
