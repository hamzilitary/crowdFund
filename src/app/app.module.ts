import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddProjectComponent } from './add-project/add-project.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/auth-guard.service'
import { AngularFireAuth } from 'angularfire2/auth';
import { PhotographyVideoComponent } from './photography-video/photography-video.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FoodCraftComponent } from './food-craft/food-craft.component';
import { GamesComponent } from './games/games.component';
import { ScienceTechComponent } from './science-tech/science-tech.component';
import { ComicsIllustrationComponent } from './comics-illustration/comics-illustration.component';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AddProjectComponent,
    DetailComponent,
    AdminComponent,
    AdminDetailComponent,
    PhotographyVideoComponent,
    FoodCraftComponent,
    GamesComponent,
    ScienceTechComponent,
    ComicsIllustrationComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
   HttpModule,
   routing,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule
  ],
  providers: [AuthGuard, AuthenticationService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
