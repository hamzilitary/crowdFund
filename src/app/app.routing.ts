import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProjectComponent } from './add-project/add-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'add',
    component: AddProjectComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
