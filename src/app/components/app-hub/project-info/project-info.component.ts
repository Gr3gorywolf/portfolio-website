import { Component, OnInit } from '@angular/core';
import { AppInfo } from 'src/app/models/appInfo';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  currentApp:AppInfo;
  constructor(public router:Router,public projects:ProjectService,public Ui:UiService) { }
  ngOnInit() {
    setTimeout(() => {
      var splittedRoute=this.router.url.split("/");
      this.currentApp=this.projects.getProjectByRepo( splittedRoute[splittedRoute.length-1]);
      this.Ui.navbarTitle=this.currentApp.name;
      this.Ui.backgroundColor=this.currentApp.primary_color;
    }, 50);
    
  }

}
