import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { User } from './user';
import { Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate
{
  constructor(private auth:AuthService,private router:Router,private userServe:UserService) 
  { 

  }

  canActivate()
  {
    return this.auth.user$
    .pipe(switchMap(user => this.userServe.lookUpUser(user.email)))
    .pipe(map(user => user.isAdmin));
  }
}
