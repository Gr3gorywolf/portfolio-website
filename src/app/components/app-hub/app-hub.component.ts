import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { AppInfo } from 'src/app/models/appInfo.js';
import { ProjectService } from 'src/app/services/project.service';

declare var $: any;
@Component({
  selector: 'app-app-hub',
  templateUrl: './app-hub.component.html',
  styleUrls: ['./app-hub.component.css']
})
export class AppHubComponent implements OnInit {





  constructor(public UI: UiService, public projectService: ProjectService) { }


  categories: Array<any> = [
    {
      title: 'Mobile',
      icon: 'phone_android'
    },
    {
      title: 'Web',
      icon: 'code'
    },
    {
      title: 'Desktop',
      icon: 'laptop'
    }
  ]

  ngOnInit() {

    setTimeout(() => {
      this.UI.navbarTitle = 'My projects';
      this.UI.navbarVisible = true;
    }, 50);




  }
  tabClicked() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#tabBar').offset().top - 90
    }, 120);
  }

}
