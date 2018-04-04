import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../services/crowdFundProject.service';
import { CrowdFundProject } from '../models/crowdFundProject.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService,
  private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  deleteProject(projectToDelete) {
    if(confirm("Are you sure you want to delete this project?")) {
      this.projectService.deleteProject(projectToDelete)
    }
  }

  goToAdminDetail(clicked) {
    this.router.navigate(['admin', clicked.$key]);
  }

}
