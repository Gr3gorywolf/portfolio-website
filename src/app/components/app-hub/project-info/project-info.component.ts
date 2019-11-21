import { Component, OnInit } from '@angular/core';
import { AppInfo } from 'src/app/models/appInfo';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { UiService } from 'src/app/services/ui.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  currentApp: AppInfo;
  commits: Array<any> = null;
  constructor(public router: Router, public projects: ProjectService, public Ui: UiService, public client: HttpClient) { }
  ngOnInit() {
    setTimeout(() => {
      var splittedRoute = this.router.url.split("/");
      this.currentApp = this.projects.getProjectByRepo(splittedRoute[splittedRoute.length - 1]);
      this.Ui.navbarTitle = this.currentApp.name;
      this.loadCommits();
    }, 50);

  }
  getMdLink() {
    var splittedRoute = this.currentApp.repository.split("/");
    return `https://raw.githubusercontent.com/${splittedRoute[3]}/${splittedRoute[4]}/master/README.md`;
  }
  mdLoaded(event) {
    console.log("xd")
    $("#about").css({
      "width": "0px",
      "height": "0px"
    });
  }

  loadCommits() {
    var splittedRoute = this.currentApp.repository.split('/');
    this.client.get(`https://api.github.com/repos/${splittedRoute[splittedRoute.length - 2]}/${splittedRoute[splittedRoute.length - 1]}/commits`)
      .subscribe((data: Array<any>) => {
        if (data.length > 0) {
          this.commits = data;
        }
      });
  }





  executeDownload(selectedLink: string = null) {
    if (this.currentApp.downloadLinks.length == 1) {
      window.open(this.currentApp.downloadLinks[0].link, "_blank");
    }
    else
      if (this.currentApp.downloadLinks.length > 1) {
        if (selectedLink == null) {
          $("#downloadOptionsDialog").modal("open");
        } else {
          window.open(selectedLink, "_blank");
        }

      }
  }

}
