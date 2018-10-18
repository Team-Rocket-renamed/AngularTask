const express = require('express');
const app = express();
app.use(express.json());
const db = require("./db.js");

function updateEmployees(employeesReady) {
    db.getEmployee(function(rows) {
        employees = rows;
        employeesReady();
    });
};

function updateEmployeesDept(employeesReady) {
    db.getEmployeeDept(function(rows) {
        employees = rows;
        employeesReady();
    });
};

employees = [];

app.get("/get-Employees", function(req, res) {
    updateEmployees(function() {
      res.send(employees);
    });  
});

app.get("/get-Employee-Dept", function(req, res) {
    updateEmployeesDept(function() {
        res.send(employees);
    })
})

app.listen(8002, function() {
    console.log("Express started");
});