import { Injectable } from '@angular/core';
import { AngularFirestoreCollection,AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class UserService 
{
  userCollection:AngularFirestoreCollection<User>;
  userObservable:Observable<User[]>;
  userDoc:AngularFirestoreDocument<User>;

  constructor(private afs:AngularFirestore) { 
    this.userCollection = afs.collection('users', ref => ref.orderBy("email","asc"));
    this.userObservable = this.userCollection.valueChanges({idfield:"uid"});
  }

  addUser(user:User)
  {
    this.userCollection.doc(user.email).set(user);
  }

  removeUser(user:User)
  {
    this.userDoc = this.afs.doc("users/" + user.email);
    this.userDoc.delete();
  }

  lookUpUser(email:string)
  {
    return this.userObservable.pipe(map(users =>{
      for(let user of users)
        if(email === user.email)
          return user;
      return null;
    }));
  }
  
  lookupDoc(userid:string)
  {
    return this.afs.doc("users/" + userid);
  }
}
