import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAddFormComponent } from './sales-add-form.component';

describe('SalesAddFormComponent', () => {
  let component: SalesAddFormComponent;
  let fixture: ComponentFixture<SalesAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
