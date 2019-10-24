import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-test';
  courses = ["Math","English","Science"];
  viewMode = "map";

  //----------------------------------------------------------------------------------------------------//
  colors = [
    { id:1, name: 'red'},
    { id:2, name: 'green'},
    { id:3, name: 'blue'}
  ]

  addColor()
  {
    this.colors.push({ id:4, name:'black'});
  }

  removeColor(color)
  {
    let index = this.colors.indexOf(color);
    this.colors.splice(index,1);
  }
 //----------------------------------------------------------------------------------------------------//
  fruits;

  loadFruits()
  {
    this.fruits = [
      { id:1, name:'apple'},
      { id:2, name:'orange'},
      { id:3, name:'mango'}
    ]
  }

  trackFruit(index,fruit)
  {
    return fruit ? fruit.id : undefined;
  }
  //----------------------------------------------------------------------------------------------------//
  canSave = true;
}
