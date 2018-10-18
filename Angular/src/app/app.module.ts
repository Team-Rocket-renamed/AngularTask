import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesAddFormComponent } from './sales-add-form/sales-add-form.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { ListAllEmployeesComponent } from './list-all-employees/list-all-employees.component';
import { ListDeptEmployeesComponent } from './list-dept-employees/list-dept-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    SalesAddFormComponent,
    AddEmployeeFormComponent,
    ListAllEmployeesComponent,
    ListDeptEmployeesComponent,
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
