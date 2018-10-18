import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SalesEmployee } from '../sales-employee';

@Component({
  selector: 'ang-sales-add-form',
  templateUrl: './sales-add-form.component.html',
  styleUrls: ['./sales-add-form.component.css']
})
export class SalesAddFormComponent implements OnInit {

  public newSalesEmployee : SalesEmployee;
  localData : DataService

  constructor(data : DataService){
    this.localData = data;
   
  }

  ngOnInit(){
    this.newSalesEmployee = new SalesEmployee();
  }
  
  addSalesEmployee():void{
    var SalesEmployeeToAdd = this.newSalesEmployee;
    this.newSalesEmployee = new SalesEmployee();
    console.log(SalesEmployeeToAdd);
    this.localData.addSalesEmployee(SalesEmployeeToAdd);
  }

}
