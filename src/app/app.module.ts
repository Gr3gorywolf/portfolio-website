import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { GregoryComponent } from './components/customsvg/gregory/gregory.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    GregoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
