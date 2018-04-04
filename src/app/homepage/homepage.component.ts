import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../services/crowdFundProject.service';
import { CrowdFundProject } from '../models/crowdFundProject.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ProjectService]
})

export class HomepageComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterCategory: string;
  filtered: boolean = false;

  constructor(private projectService: ProjectService,
  private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(clicked) {
    this.router.navigate(['projects', clicked.$key]);
  }

  setFilterCategory(category: string) {
    if(!this.filtered){
      this.filterCategory = category;
      this.filtered = true;
    } else {
      this.filtered = false;
    }
  }


}
