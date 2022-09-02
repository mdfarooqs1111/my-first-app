import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  loadedFeature = 'recipe'

  onNavigation (feature:string) {
this.loadedFeature = feature;
  }
}
