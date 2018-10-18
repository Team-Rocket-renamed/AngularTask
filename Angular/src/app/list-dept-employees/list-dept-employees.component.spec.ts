import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeptEmployeesComponent } from './list-dept-employees.component';

describe('ListDeptEmployeesComponent', () => {
  let component: ListDeptEmployeesComponent;
  let fixture: ComponentFixture<ListDeptEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeptEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeptEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
