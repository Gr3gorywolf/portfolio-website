import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GregoryComponent } from './components/customsvg/gregory/gregory.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GregoryappsComponent } from './components/customsvg/gregoryapps/gregoryapps.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { HttpClientModule } from '@angular/common/http';
import { GregoryfaceComponent } from './components/customsvg/gregoryface/gregoryface.component';
import { NgxMdModule } from 'ngx-md';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';
import { ProjectCardBigComponent } from './components/project-card-big/project-card-big.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { LastCommitChipComponent } from './components/last-commit-chip/last-commit-chip.component';
import { AboutComponent } from './pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GregoryComponent,
    ProjectsComponent,
    GregoryappsComponent,
    ProjectCardComponent,
    NavbarComponent,
    ProjectInfoComponent,
    GregoryfaceComponent,
    TimelineComponent,
    ProjectGalleryComponent,
    ProjectCardBigComponent,
    PreloaderComponent,
    LastCommitChipComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    NgxMdModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
