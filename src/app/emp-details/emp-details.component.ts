import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  EmployeeService } from '../employee.service';
import { HomeModule } from '../home/home/home.module';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {

  // employeeadd:FormGroup;
  home: HomeModule = new HomeModule();
  EmployeeForm: FormGroup;

  constructor(private fb:FormBuilder,private service:EmployeeService,@Inject(MAT_DIALOG_DATA) private _data: any) { 
    this.EmployeeForm = this.fb.group({
      'name': [''],
      'email': [''],
      // 'id': [0],
    });
  }


  ngOnInit(): void {
    console.log('Data', this._data)

  }

  save(){

    // const max2 = this._data.reduce((op:any, item:any) => op = op > item.id ? op : item.id, 0);
    // console.log('Max id',max2+1);
    // this.EmployeeForm.value.id=max2+1
    console.log('API',this.EmployeeForm.value);
    this.service.create(this.EmployeeForm.value).then(() => {
      console.log(this.home);
      alert("Employee added sucessfully")
    });
  }

  // newEmployee(): void {
  //   //this.submitted = false;
  //   this.home = new HomeModule();
  // }

}
