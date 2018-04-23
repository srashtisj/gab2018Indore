import { Component } from '@angular/core';

import{DataService} from './core/services/data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
public title  ="123"
  constructor(public dataService: DataService) {
    this.dataService.getName().subscribe(res => {
      this.title = res;
    });
   }
  
}


