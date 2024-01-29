import { Component } from '@angular/core';
import { DataService } from './services/data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 18;
  subtitle = 15;
  prueba = "esto es un experimento"

  constructor(private dataService: DataService) {
    this.dataService.sharedTitle = this.title;
  }
}
