import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'add',
    component: AddProjectComponent
  },
  {
    path: 'projects/:id',
    component: DetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
