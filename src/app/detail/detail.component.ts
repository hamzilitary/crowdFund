import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrowdFundProject } from '../models/crowdFundProject.model';
import { ProjectService } from '../services/crowdFundProject.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.projectId = urlParameters['id'];
   });
   this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
