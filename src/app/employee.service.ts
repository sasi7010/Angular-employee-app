import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { HomeModule } from './home/home/home.module';

// export interface Employee {
//   Email: string;
//   Id: number;
//   Name: string;
// }
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dbpath = '/employee' ;

  employeeRef: AngularFirestoreCollection<HomeModule>;

  constructor(private db: AngularFirestore,private dbs: AngularFireDatabase) {
    this.employeeRef = db.collection(this.dbpath);
   }

  getAll(): AngularFirestoreCollection<HomeModule> {
    return this.employeeRef;
  }

  create(employee: HomeModule): any {
    console.log('Test', employee)
    return this.employeeRef.add({ ...employee });
  }

  update(key: string, value: any): Promise<void> {
    return this.employeeRef.doc(key).update(value);
    
    //return this.tutorialsRef.update(key, value);
  }

  delete(id: string): Promise<void> {
    return this.employeeRef.doc(id).delete();
  }


}
