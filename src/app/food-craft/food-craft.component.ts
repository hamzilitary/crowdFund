import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/crowdFundProject.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CrowdFundProject } from '../models/crowdFundProject.model';

@Component({
  selector: 'app-food-craft',
  templateUrl: './food-craft.component.html',
  styleUrls: ['./food-craft.component.css'],
  providers: [ProjectService]
})
export class FoodCraftComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterCategory: string = "Food/Craft";
  
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(clicked) {
    this.router.navigate(['projects', clicked.$key]);
  }






}
