import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GregoryComponent } from './components/customsvg/gregory/gregory.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { AppHubComponent } from './components/app-hub/app-hub.component';
import { ProjectInfoComponent } from './components/app-hub/project-info/project-info.component';


const routes: Routes = [
{ path: '', component: ComingSoonComponent},
{path: 'apps', component: AppHubComponent},
{path: 'app/:id', component: ProjectInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
