import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { AppInfo } from 'src/app/models/appInfo.js';
import projectsEng from '../../../assets/data/projects.eng.json';
import projectsEsp from '../../../assets/data/projects.esp.json';
declare var $:any;
@Component({
  selector: 'app-app-hub',
  templateUrl: './app-hub.component.html',
  styleUrls: ['./app-hub.component.css']
})
export class AppHubComponent implements OnInit {

  constructor(public UI:UiService) { }
  projects:Array<AppInfo>=[];
  ngOnInit() {
    this.projects=projectsEsp;
    setTimeout(() => {
      this.UI.navbarTitle = "App Hub";
      this.UI.navbarVisible = true;
    }, 50);




  }
  tabClicked(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#tabBar").offset().top-15
  }, 120);
  }

}
