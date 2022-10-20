import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpDetailComponent } from './delete-emp-detail.component';

describe('DeleteEmpDetailComponent', () => {
  let component: DeleteEmpDetailComponent;
  let fixture: ComponentFixture<DeleteEmpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmpDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
