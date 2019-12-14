import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
import { Project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Section } from 'src/app/shared/models/section';

declare var $: any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {





  constructor(public UI: UiService, public projectService: ProjectService) { }


  categories: Array<Section> = [
    {
      Title: 'Presentation',
      Icon: 'home',
      Id:'sec-1'
    },
    {
      Title: 'Mobile',
      Icon: 'phone_android',
      Id:'sec0'
    },
    {
      Title: 'Web',
      Icon: 'code',
      Id:'sec1'
    },
    {
      Title: 'Desktop',
      Icon: 'laptop',
      Id:'sec2'
    }
  ]

  ngOnInit() {

    setTimeout(() => {
      this.UI.navbarTitle = 'My projects';
      this.UI.navbarVisible = true;
      this.UI.backgroundColor = "#5271ff"
    }, 50);




  }

  scrollToCategory(categoryId) {
    console.log("xd");
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#' + categoryId).offset().top - 70
    }, 120);
  }
}
