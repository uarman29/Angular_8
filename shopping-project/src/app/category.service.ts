import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryCollection:AngularFirestoreCollection<Category>
  categoryObservable:Observable<Category[]>

  constructor(private afs:AngularFirestore) 
  { 
    this.categoryCollection = afs.collection('categories', ref => ref.orderBy("name","asc"));
    this.categoryObservable = this.categoryCollection.valueChanges({idField:"uid"});
  }
}
