import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GregoryComponent } from './components/customsvg/gregory/gregory.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';


const routes: Routes = [
{ path: '', component: HomeComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'project/:id', component: ProjectInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
