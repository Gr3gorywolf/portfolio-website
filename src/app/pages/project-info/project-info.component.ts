import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UiService } from 'src/app/shared/services/ui.service';
import { HttpClient } from '@angular/common/http';
import { ProjectHelper } from 'src/app/shared/helpers/ProjectHelper';
import { Section } from 'src/app/shared/models/section';

declare var $: any;
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  currentProject: Project;
  projectCommits: Array<any> = null;
  helper: ProjectHelper = new ProjectHelper();
  isLoadingCommits: boolean = true;
  sections: Array<Section> = [
    {
      Icon: "image"
      , Id: "sec0"
      , Title: "Project gallery"
    },
    {
      Icon: "history"
      , Id: "sec1"
      , Title: "Commits history"
    }
  ]

  constructor(public router: Router, public projectService: ProjectService, public Ui: UiService, public client: HttpClient) { }
  ngOnInit() {
    setTimeout(() => {
      var repoName = this.helper.repoNameByRouteLink(this.router.url);
      this.currentProject = this.projectService.getProjectByRepo(repoName);
      this.Ui.navbarTitle = this.currentProject.name;
      this.loadCommits();
      this.Ui.navbarAccentColor = this.currentProject.accent_color;
    }, 50);
  }

  loadCommits() {
    var repo = this.currentProject.repository;
    this.client.get(`https://api.github.com/repos/${this.helper.repoOwner(repo)}/${this.helper.repoName(repo)}/commits`)
      .subscribe((data: Array<any>) => {
        this.isLoadingCommits = false;
        if (data.length > 0) {
          this.projectCommits = data;
        }
      });
  }

  tabSelected() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#tabBar').offset().top - 70
    }, 120);
  }



}
