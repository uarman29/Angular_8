import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { switchMap } from "rxjs/operators";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<firebase.User>;
  users:User[];

  constructor(private afAuth:AngularFireAuth,private userServe:UserService) 
  {
    this.user$ = afAuth.authState;
  }

  login()
  {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((userCredentials)=>{
      let currentUser = (userCredentials.user);
      let currentUserObject = {
        id:1,
        isAdmin:false,
        name:currentUser.displayName, 
        email:currentUser.email
      };

      this.userServe.lookUpUser(currentUserObject.email).subscribe(user=>{
        if(user == null)
        this.userServe.addUser(currentUserObject);
      })
      location.reload();                   
    });
  }

  logout()
  {
    this.afAuth.auth.signOut();
  }
}


