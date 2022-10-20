import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
import { HomeModule } from '../home/home/home.module';

@Component({
  selector: 'app-delete-emp-detail',
  templateUrl: './delete-emp-detail.component.html',
  styleUrls: ['./delete-emp-detail.component.scss']
})
export class DeleteEmpDetailComponent implements OnInit {
  home: HomeModule = new HomeModule();
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) private _data: any,private service:EmployeeService,) { }

  ngOnInit(): void {

  }

  delete(){
    this.service.delete(this._data.d.id)
    .then(() => {
      alert("deleted successfully");  
    })
    
  }

}
