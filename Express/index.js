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
    db.getEmployeeByDept(function(rows) {
        employees = rows;
        employeesReady();
    })
}

employees = [];

app.get("/get-Employees", function(req, res) {
    updateEmployees(function() {
        res.send(employees);
    });  
});

app.get("/get-Employees-by-dept", function(req, res) {
    updateEmployeesDept(function() {
        res.send(employees);
    });
});


app.listen(8010, function() {
    console.log("Express started");
});