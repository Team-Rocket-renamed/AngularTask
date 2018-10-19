use Company;
SELECT EmployeeDetails.employeeID AS 'ID', employeeName AS 'Name', totalSales AS 'Total Sales' FROM EmployeeDetails join SalesEmployee
WHERE EmployeeDetails.employeeID = SalesEmployee.employeeID
ORDER BY totalSales DESC;