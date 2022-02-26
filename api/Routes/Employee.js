// Using express and routes
const router = require('express').Router();

// Employee module which is required and imported
let Employee = require('../Models/Employee');

// To Get List Of Employees
router.get("/", async(req,res) => {
    try{
        const allEmployee = await Employee.find();
        res.status(200).json(allEmployee);
    }catch(err){
        res.status(500).json(err);
    }
});

// To Add New Employee
router.post("/addEmployee", async(req,res) => {
    const addEmployee = new Employee(req.body);
    try{
        const savedEmployee = await addEmployee.save();
        res.status(200).json(savedEmployee);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router