import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthGuard } from './services/auth-guard.service'
import { PhotographyVideoComponent } from './photography-video/photography-video.component'
import { FoodCraftComponent } from './food-craft/food-craft.component'
import { GamesComponent } from './games/games.component'
import { ScienceTechComponent } from './science-tech/science-tech.component'
import { ComicsIllustrationComponent } from './comics-illustration/comics-illustration.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'comics',
    component: ComicsIllustrationComponent
  },
  {
    path: 'tech',
    component: ScienceTechComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'food',
    component: FoodCraftComponent
  },
  {
    path: 'photo',
    component: PhotographyVideoComponent
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
