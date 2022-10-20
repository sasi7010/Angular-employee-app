import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpDetailsComponent } from '../emp-details/emp-details.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditEmpDetailComponent } from '../edit-emp-detail/edit-emp-detail.component';
import { DeleteEmpDetailComponent } from '../delete-emp-detail/delete-emp-detail.component';
import { EmployeeService } from '../employee.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
// interface Post {
//   Email:string;
//   Name:string;
// }

// interface PostId extends Post {
//   Id: number;
  
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  posts: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  data: any;
  test: any;

  constructor(public dialog: MatDialog,public service:EmployeeService,private afs: AngularFirestore) {
    this.dataSource.data = this.PeriodicElement;
   }

   PeriodicElement = [
    {position: 1, EmployeeID: '', EmployeeName: '', Employeemail: '',Action:''},
  ];

  displayedColumns: string[] = ['position', 'Employee ID', 'Employee Name', 'Employee Email' , 'Action'];
  dataSource = new MatTableDataSource();

  // postsCol: AngularFirestoreCollection<Post>;
  // postDoc: AngularFirestoreDocument<Post>;
  // post: Observable<Post>;

  ngOnInit(): void {
    // console.log("fire base")
    // this.service.getAll().snapshotChanges().subscribe(data => {
    //   console.log('test', data)
    // });
    // this.postsCol = this.afs.collection('posts');
    // //this.posts = this.postsCol.valueChanges();
    // this.posts = this.postsCol.snapshotChanges()
    //   .map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data() as Post;
    //       const id = a.payload.doc.id;
    //       return { id, data };
    //     })
    //   })
    
    this.service.getAll().snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c =>
          (
            
            { id: c.payload.doc.id, ...c.payload.doc.data()        
            })
            
        )
        
      )
      
    )
    .subscribe(data => {
      this.data = data;
      console.log('data :' , JSON.stringify(data));
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      console.log('chks' , data)
     
    });

    

  }

  
  add(){
    const dialogRef = this.dialog.open(EmpDetailsComponent,
      {
        height: '50%',
        width: '70%',
        data:this.data
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  edit(d:any){
    const dialogRef = this.dialog.open(EditEmpDetailComponent,
      {
        height: '50%',
        width: '70%',
        data:{d}
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(d:any){
    const dialogRef = this.dialog.open(DeleteEmpDetailComponent,
        {
          width: "100%",
            maxWidth: "400px",
            height: "auto",
            hasBackdrop: true,
            maxHeight: "700px",
            data:{d},
        });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
