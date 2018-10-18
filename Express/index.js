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

employees = [];

app.get("/employees", function(req, res) {
    updateEmployees(function() {
      res.send(employees);
    });  
  });

app.listen(8002, function() {
    console.log("Express started");
});