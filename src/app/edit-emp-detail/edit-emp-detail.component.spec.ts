import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpDetailComponent } from './edit-emp-detail.component';

describe('EditEmpDetailComponent', () => {
  let component: EditEmpDetailComponent;
  let fixture: ComponentFixture<EditEmpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
