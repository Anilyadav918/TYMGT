const Employee = require('../models/Employee');
const Survey = require('../models/Survey');

exports.getEmployees = async (req, res, next) => {
    try {
        //res.send(Employee);
        const employees = await Employee;
        res.status(200).json({success: true, count: employees.length, data: employees});
    } catch (err) {
        res.status(400).json({success:false});
    }
}

exports.createEmployee = async (req, res, next) => {
    //console.log(req.body);
    try {
        //const {EmployeeNumber, name, age, gender, city,jobTitle,departmentName,serviceLength  } = req.body;
        const newEmployee = req.body;
        //const employee = await Employee.push({EmployeeNumber, name, age, gender, city,jobTitle,departmentName,serviceLength});
        console.log(newEmployee);
    } catch (err) {
        res.status(400).json({success: false});
    }
    
}