import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CrowdFundProject } from '../models/crowdFundProject.model';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects(){
    return this.projects
  }

  addProject(newProject: CrowdFundProject) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  updateFunding(localUpdatedProject){
    let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({fundsRaised: localUpdatedProject.fundsRaised})
  }

  deleteProject(localProjectToDelete) {
    let projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

  updateProject(localUpdatedProject) {
    let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name, starters: localUpdatedProject.starters, desc: localUpdatedProject.desc, goal: localUpdatedProject.goal, plans: localUpdatedProject.plans, swag: localUpdatedProject.swag});
  }

  updateProjectStarters(localUpdatedProject) {
    let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({starters: localUpdatedProject.starters});
  }

}
