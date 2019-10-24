import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers = [
    {name:'John', picture:'assets/profilepic.jpg'},
    {name:'Mary', picture:'assets/profilepic.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
