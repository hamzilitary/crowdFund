import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/crowdFundProject.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CrowdFundProject } from '../models/crowdFundProject.model';

@Component({
  selector: 'app-photography-video',
  templateUrl: './photography-video.component.html',
  styleUrls: ['./photography-video.component.css'],
  providers: [ProjectService]
})
export class PhotographyVideoComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterCategory: string = "Photography/Video";
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(clicked) {
    this.router.navigate(['projects', clicked.$key]);
  }



}
