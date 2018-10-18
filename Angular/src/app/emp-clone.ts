import { SalesEmployee } from "./sales-employee";

export class EmpClone {
    id: number;
    employeeName: string;
    employeeaddress: string;
    employeenin: string;
    employeeBank: string;
    employeeSalary: number;

    

    //sales emp -> emp
    constructor(sEmp ?: SalesEmployee)
        {
           
            if(sEmp.name != null){
            this.employeeName = sEmp.name;
            }

            if(sEmp.id != null && sEmp.id != 0){
            this.id = sEmp.id;
            }

            if(sEmp.address != null){
            this.employeeaddress = sEmp.address;
            }

            if(sEmp.nin != null){
            this.employeenin = sEmp.nin;
            }


            if(sEmp.bankNumber != null){
            this.employeeBank = sEmp.bankNumber;
            }


            if(sEmp.salary != null){
            this.employeeSalary = sEmp.salary;
            }
        } 

    }
