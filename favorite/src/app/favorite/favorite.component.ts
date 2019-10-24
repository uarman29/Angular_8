import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit 
{
  @Input() favorited:boolean; // Use @Input to make field a property of the Favorite Component
  currentImage = ""
  @Output() change = new EventEmitter(); //Use @Output to make an output property

  toggleStar()
  {
    this.favorited = !this.favorited;
    if(this.favorited)
      this.currentImage = "assets/fullstar.png"
    else
      this.currentImage = "assets/emptystar.png"
    
      this.change.emit(this.favorited); //Use emit to send out a signal that event has occured
  }
  constructor() { }

  ngOnInit() 
  {
    if(this.favorited)
      this.currentImage = "assets/fullstar.png"
    else
      this.currentImage = "assets/emptystar.png"

  }

}
