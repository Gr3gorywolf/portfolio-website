import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gregory Cabral';
  constructor(public UI:UiService,public projects:ProjectService){
           projects.init();
  }
}
