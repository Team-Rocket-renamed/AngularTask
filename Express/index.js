const express = require('express');
const app = express();
app.use(express.json());
const db = require("./db.js");

function updateEmployees(employeesReady) {
    db.getEmployee(function(rows) {
        console.log("Updating employees list")
        employees = rows;
        employeesReady();
    });
};

function updateEmployeesDept(employeesReady) {
    db.getEmployeeByDept(function(rows) {
        console.log("Updating employees list")
        employees = rows;
        employeesReady();
    })
}

function updateEmployeesNetPay(employeesReady) {
    db.getEmployeeNetPay(function(rows) {
        console.log("Updating employees list")
        employees = rows;
        employeesReady();
    })
}

function updateBestSalesEmployee(employeesReady) {
    db.getBestSalesEmployee(function(rows) {
        console.log("Updating employees list")
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

app.post("/add-Employee", function(req, res) {
    db.addEmployee(req.body, function(insertedKey) {
        updateEmployees(function() {
            res.send(employees);
        });
    });
});

app.post("/add-Sales-Employee", function(req, res) {
    db.addSalesEmployee(req.body, function(insertedKey) {
        updateEmployees(function() {
            res.send(employees);
        });
    });
});

app.get("/get-Employee-Net-Pay", function(req, res) {
    updateEmployeesNetPay(function() {
        res.send(employees);
    });
});

app.get("/get-Best-Sales-Employee", function(req, res) {
    updateBestSalesEmployee(function() {
        res.send(employees);
    });
});

app.listen(8010, function() {
    console.log("Express started");
});