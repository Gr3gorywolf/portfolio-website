import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GregoryComponent } from './components/customsvg/gregory/gregory.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';


const routes: Routes = [
{ path:"", component:ComingSoonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
