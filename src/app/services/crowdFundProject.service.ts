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

}
