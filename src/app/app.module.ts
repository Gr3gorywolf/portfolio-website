import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { GregoryComponent } from './components/customsvg/gregory/gregory.component';
import { AppHubComponent } from './components/app-hub/app-hub.component';
import { GregoryappsComponent } from './components/customsvg/gregoryapps/gregoryapps.component';
import { ProjectCardComponent } from './components/app-hub/project-card/project-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectInfoComponent } from './components/app-hub/project-info/project-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    GregoryComponent,
    AppHubComponent,
    GregoryappsComponent,
    ProjectCardComponent,
    NavbarComponent,
    ProjectInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
