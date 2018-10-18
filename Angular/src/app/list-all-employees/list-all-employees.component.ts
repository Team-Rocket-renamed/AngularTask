import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'ang-list-all-employees',
  templateUrl: './list-all-employees.component.html',
  styleUrls: ['./list-all-employees.component.css']
})
export class ListAllEmployeesComponent implements OnInit {

  
  localData : DataService

  constructor(data : DataService){
    this.localData = data;
   
  }

  ngOnInit(){
    
    
  }
}
