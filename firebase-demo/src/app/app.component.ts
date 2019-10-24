import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  coursesCollection:AngularFirestoreCollection<Course>;
  coursesObservable:Observable<Course[]>;
  courseDoc: AngularFirestoreDocument<Course>;
  courses;
  
  constructor(public db: AngularFirestore)
  {
    this.coursesCollection = db.collection('courses', ref => ref.orderBy("id","asc"));
    this.coursesObservable = this.coursesCollection.valueChanges({idField:"keyfield"});
    this.coursesObservable.subscribe(courses => {
      console.log(courses);
      this.courses = courses;
    });
  }

  addCourse(id:number, name:string)
  {
    id = +id;
    let current:Course = {id,name};
    this.coursesCollection.add(current);
  }

  deleteCourse(course:Course)
  {
    this.courseDoc = this.db.doc("courses/"+course.keyfield);
    this.courseDoc.delete();
  }


}

interface Course{
  id:number;
  name:string;
  keyfield?:string;
}
