const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");

//Get all employee list
router.get("/", employeeController.getEmployeeList);

// get employee by ID
router.get("/:id", employeeController.getEmployeeByID);

// create new employee
router.post("/", employeeController.createNewEmployee);

// create new employee
router.put("/:id", employeeController.updateEmployee);

// delete employee
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
