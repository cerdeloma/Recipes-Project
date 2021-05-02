import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-shopping-list';
  loadedRecipes = 'recipe'

  onNavigate(feature: string){
    this.loadedRecipes = feature
  }

}
