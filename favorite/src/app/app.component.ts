import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'favorite';
  post = {
    favorite:true
  }

  onFavoriteChanged(isFavorited)
  {
    console.log("Favorite changed " + isFavorited);
  }
}
