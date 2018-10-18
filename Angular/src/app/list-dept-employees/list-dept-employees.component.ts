import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ang-list-dept-employees',
  templateUrl: './list-dept-employees.component.html',
  styleUrls: ['./list-dept-employees.component.css']
})
export class ListDeptEmployeesComponent implements OnInit {

  localData : DataService

  constructor(data : DataService){
    this.localData = data;
   
  }

  ngOnInit(){
    
  }

 

}
