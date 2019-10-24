import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testCollection:AngularFirestoreCollection<any>;
  testObservable:Observable<any>;
  constructor(private afs:AngularFirestore) { 
    this.testCollection = afs.collection('test');
    this.testObservable = this.testCollection.valueChanges({idField:"uid"});
    let test:test = {items:[1,2,3,4,5]};
    this.testCollection.add(test);
    this.testObservable.subscribe(test=>{
      console.log(test);
    });
  }
}

interface test{
  items:number[];
}
