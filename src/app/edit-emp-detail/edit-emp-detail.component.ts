import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
import { HomeModule } from '../home/home/home.module';

@Component({
  selector: 'app-edit-emp-detail',
  templateUrl: './edit-emp-detail.component.html',
  styleUrls: ['./edit-emp-detail.component.scss']
})
export class EditEmpDetailComponent implements OnInit {
  
  home: HomeModule = new HomeModule();
  EmployeeForm:FormGroup;
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) private _data: any,private service:EmployeeService,) { 
    this.EmployeeForm = this.fb.group({
      'name': [this._data.d.name],
      'email': [this._data.d.email],
      'id': [this._data.d.id],
    });
  }

  ngOnInit(): void {
    console.log('edit' , this._data)
  }

  ngOnChanges(): void {
    this.EmployeeForm = { ...this._data };
  }


  update(){
    const data = {
      name: this.EmployeeForm.value.name,
      email: this.EmployeeForm.value.email,
    };

    console.log(this.EmployeeForm.value);
    this.service.update(this.EmployeeForm.value.id, data)
      .then(() => {
       alert("Employee Updated successfully")
      })
     
  }
}
