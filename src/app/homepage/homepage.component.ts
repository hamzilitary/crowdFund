import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../services/crowdFundProject.service';
import { CrowdFundProject } from '../models/crowdFundProject.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthGuard } from '../services/auth-guard.service'




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ProjectService, AngularFireAuth, AuthGuard]
})

export class HomepageComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterCategory: string = 'All Projects';
  filtered: boolean = false;

  constructor(private projectService: ProjectService,
  private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(clicked) {
    this.router.navigate(['projects', clicked.$key]);
  }

  setFilterCategory(category: string) {
      this.filterCategory = category;
      this.filtered = true;
  }

  resetFilterCategory(){
    this.filterCategory = 'All Projects'
    this.filtered = false;
  }

  colorByFunding(project){
    let percentFunded = (project.fundsRaised / project.goal)*100;
    if(percentFunded === 100){
      return "green";
    } else if(percentFunded >= 75) {
      return "yellow";
    }else if( percentFunded >= 50) {
      return "orange";
    }else if(percentFunded >= 25) {
      return "red";
    }else {
      return "";
    }
  }
  rowIndex(idx){
    if((idx+1) % 3 === 0){
      return "row";
    } else if (idx === 0){
      return "row";
    } else {
      return ""
    }
  }

}
