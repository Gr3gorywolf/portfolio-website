import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
import { Project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/shared/services/project.service';

declare var $: any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {





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

  scrollToCategory(categoryId) {
    console.log("xd");
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#cat' + categoryId).offset().top - 70
    }, 120);
  }
}
