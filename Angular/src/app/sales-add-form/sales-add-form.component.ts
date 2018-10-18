import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SalesEmployee } from '../sales-employee';
import { Employee } from '../employee';
import { EmpClone } from '../emp-clone';

@Component({
  selector: 'ang-sales-add-form',
  templateUrl: './sales-add-form.component.html',
  styleUrls: ['./sales-add-form.component.css']
})
export class SalesAddFormComponent implements OnInit {

  public newSalesEmployee : SalesEmployee;
  public tempEmp : EmpClone;
  localData : DataService

  constructor(data : DataService){
    this.localData = data;
   
  }

  ngOnInit(){
    this.newSalesEmployee = new SalesEmployee();
   
  }
  
  addSalesEmployee():void{
    this.tempEmp = new EmpClone(this.newSalesEmployee);
    var SalesEmployeeToAdd = this.newSalesEmployee;
    
    
    console.log(this.tempEmp);
    
    
    this.localData.addEmployee(this.tempEmp);
    
    this.newSalesEmployee = new SalesEmployee();
    //this.localData.addSalesEmployee(SalesEmployeeToAdd);
  }

}
