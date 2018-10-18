import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { HttpClient, HttpParams } from '@angular/common/http';
import { SalesEmployee } from './sales-employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  private tempEmp:Employee;

  constructor(private http: HttpClient){
      this.tempEmp = new Employee();
   }

  employees = this.http.get<Employee[]>('/api/get-Employees');

  employeedept = this.http.get<Employee[]>('/api/get-Employees-by-dept');

  public addEmployee(newCity : Employee){
    console.log(newCity);
    this.employees = this.http.post<Employee[]>('/api/add-Employee', newCity);
    this.employeedept = this.http.get<Employee[]>('/api/get-Employees-by-dept');
  }

  
  
  
  

  public addSalesEmployee(NSE : SalesEmployee){
    this.tempEmp = new Employee();
    console.log("NSE is");
    console.log(NSE);
    //take sales employee and make a temp employee from the sales employee attributes
    this.tempEmp.employeeaddress = NSE.address;
    this.tempEmp.employeeBank  = NSE.bankNumber;
    this.tempEmp.employeeName  = NSE.name;
    this.tempEmp.employeenin = NSE.nin;
    this.tempEmp.employeeSalary  = NSE.salary;
    
    this.employees = this.http.post<Employee[]>('/api/add-Employee', this.tempEmp);
    console.log("Temp emp is");
    console.log(this.tempEmp);
    
    this.tempEmp = new Employee();

  
    //this.tempEmp = new Employee(NSE);
    
    //add employee
    this.employees = this.http.post<Employee[]>('/api/add-Employee', this.tempEmp);
    //get ID by NI number

    //add sales employee 
  }

  
}
