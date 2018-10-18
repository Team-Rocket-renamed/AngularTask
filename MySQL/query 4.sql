use Company;
(select employeeID, employeeName, employeeSalary 
+ ifnull((select(commissionRate * totalSales) from SalesEmployee 
				where SalesEmployee.employeeID = EmployeeDetails.employeeID),0) as total
				from EmployeeDetails)
