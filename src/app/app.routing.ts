import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthGuard } from './services/auth-guard.service'

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'add',
    component: AddProjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects/:id',
    component: DetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/:id',
    component: AdminDetailComponent,
    canActivate: [AuthGuard]

  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
