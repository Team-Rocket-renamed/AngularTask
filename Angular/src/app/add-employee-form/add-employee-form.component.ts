import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';
import { Form, FormsModule} from '@angular/forms';

@Component({
  selector: 'ang-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  public newEmployee : Employee;
  localData : DataService

  constructor(data : DataService){
    this.localData = data;
   
  }

  ngOnInit(){
    this.newEmployee = new Employee();
  }
  
  addEmployee():void{
    var EmployeeToAdd = this.newEmployee;
    this.newEmployee = new Employee();
    //console.log(EmployeeToAdd);
    this.localData.addEmployee(EmployeeToAdd);
    EmployeeToAdd = new Employee();
    
  }

}
