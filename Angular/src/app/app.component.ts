import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'Angular Project';
  testEmployees : Employee;
  public newEmployee : Employee;
localData : DataService

  constructor(data : DataService){
    this.localData = data;
   
  }

  ngOnInit(){
    
    this.newEmployee = new Employee();
  }

  addEmployee() : void{
    var EmployeetoAdd = this.newEmployee;
    this.newEmployee = new Employee();
    this.localData.addEmployee(EmployeetoAdd);
  
  }
  
}
