import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrowdFundProject } from '../models/crowdFundProject.model';
import { ProjectService } from '../services/crowdFundProject.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import {ProgressBarModule} from "angular-progress-bar"


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  percentFunded: number;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
      });
      this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {this.projectToDisplay = dataLastEmittedFromObserver;
      this.percentFunded = (this.projectToDisplay.fundsRaised / this.projectToDisplay.goal)*100
    });
  }

  fundProject(amount: string) {
    this.projectToDisplay.fundsRaised = parseInt(this.projectToDisplay.fundsRaised) + parseInt(amount);
    this.projectService.updateFunding(this.projectToDisplay)
  }

}
