import { Component, OnInit } from '@angular/core';
import { CrowdFundProject } from '../models/crowdFundProject.model';
import { ProjectService } from '../services/crowdFundProject.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  starters: string[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  addStarter(starter: string) {
    this.starters.push(starter)
  }

  addProject(name: string, description: string, goal: number, plans: string, swag: string, category: string) {
    const newProject: CrowdFundProject = new CrowdFundProject(name, this.starters, description, goal, plans, category)
    if (swag === "true"){
      newProject.swag = true;
    }
    this.projectService.addProject(newProject);
    this.starters = [];
  }

}
