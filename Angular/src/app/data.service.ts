import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  employees = this.http.get<Employee[]>('/api/get-Employees');

  employeedept = this.http.get<Employee[]>('/api/get-Employees-by-dept');

  public addEmployee(newCity : Employee){
    this.employees = this.http.post<Employee[]>('/api/add-Employee', newCity);
    //console.log("adding city");
  }
}
