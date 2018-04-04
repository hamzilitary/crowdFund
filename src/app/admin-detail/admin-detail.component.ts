import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrowdFundProject } from '../models/crowdFundProject.model';
import { ProjectService } from '../services/crowdFundProject.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css'],
  providers: [ProjectService]
})
export class AdminDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
      });
      this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {this.projectToDisplay = dataLastEmittedFromObserver;
    });
  }

  removeStarter(idx) {
    this.projectToDisplay.starters.splice(idx, 1);
    this.projectService.updateProjectStarters(this.projectToDisplay)
  }

  addStarter(starterName) {
    this.projectToDisplay.starters.push(starterName)
    this.projectService.updateProjectStarters(this.projectToDisplay)
  }

  updateProject() {
    this.projectService.updateProject(this.projectToDisplay);
  }

}
