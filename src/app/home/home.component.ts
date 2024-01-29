import { Component } from '@angular/core';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 

  // constructor(private dataService: DataService) {
  //   this.dataService.sharedTitle = this.title;
  // }
  title: number;
  subtitle: number;

  constructor(private dataService: DataService) {
    this.title = this.dataService.sharedTitle;
    this.subtitle = this.dataService.sharedSubtitle;
  }

}
