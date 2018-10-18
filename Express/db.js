const mysql = require("mysql");

/*
exports.initConn = function(username, password) {
    try {
        const db = mysql.createConnection({
            host: "localhost",
            user: username,
            password: password,
            database: "Company"
        });
    } catch (Exception) {
        res.send("Invalid login");
    }
}
*/

const db = mysql.createConnection({
    host: "localhost",
    user: "Conor",
    password: "password",
    database: "Company"
});

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL")
})

exports.getEmployee = function(callback) {
    db.query(
        "SELECT employeeID, employeeName, employeeAddress FROM EmployeeDetails",
        function(error, rows) {
            if(error) throw error;
            callback(rows);
        }
    );
    console.log("Getting all employees")
}

exports.getEmployeeByDept = function(callback) {
    db.query(
        "SELECT employeeID, employeeName, employeeDept FROM EmployeeDetails ORDER BY employeeDept",
        function(error, rows) {
            if(error) throw error;
            callback(rows);
        }
    );
    console.log("Getting employees by department")
}

exports.getEmployeeNetPay = function(callback) {
    db.query(
        "SELECT employeeID, employeeName, employeeSalary * 0.75 + (SELECT IF EXISTS (CommissionRate * Totalsales))"
        + " FROM EmployeeDetails join SalesEmployee"
        + " WHERE EmployeeDetails.employeeID = SalesEmployee.employeeID;",
        function(error, rows) {
            if(error) throw error;
            callback(rows);
        }
    );
    console.log("Getting employees pay report")
}

exports.addEmployee = function(data, ready) {
    db.query("INSERT INTO EmployeeDetails SET ?",
    data,
    function(error, results) {
        if(error) throw error;
        ready(results.insertId);
    });
    console.log("Adding employee");
}

exports.addSalesEmployee = function(data, ready) {
    db.query("INSERT INTO SalesEmployee SET ?",
    data,
    function(error, results) {
        if(error) throw error;
        ready(results.insertId);
    });
    console.log("Adding sales employee");
}
/*
exports.removeCity = function(id, callback) {
    db.query(
        "DELETE FROM city WHERE id = ?",
        [id],
        function(err, res) {
            if (err) throw err;
            callback(res);
        }
    );
};
*/