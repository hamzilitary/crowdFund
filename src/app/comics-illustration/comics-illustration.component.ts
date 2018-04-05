import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/crowdFundProject.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CrowdFundProject } from '../models/crowdFundProject.model';

@Component({
  selector: 'app-comics-illustration',
  templateUrl: './comics-illustration.component.html',
  styleUrls: ['./comics-illustration.component.css'],
  providers: [ProjectService]

})
export class ComicsIllustrationComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterCategory: string = "Games";
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(clicked) {
    this.router.navigate(['projects', clicked.$key]);
  }
}
