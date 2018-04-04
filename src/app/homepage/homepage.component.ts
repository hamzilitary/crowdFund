import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {
  }

}
