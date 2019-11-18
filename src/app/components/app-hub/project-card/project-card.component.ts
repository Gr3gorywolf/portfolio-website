import { Component, OnInit, Input } from '@angular/core';
import { AppInfo } from 'src/app/models/appInfo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: AppInfo;
  lastCommit: any = null;
  constructor(public client: HttpClient) { }

  ngOnInit() {
    this.loadLastCommit();
  }

  getRepositoryName() {
    var splittedRoute = this.project.repository.split('/');
    return splittedRoute[splittedRoute.length - 1];
  }

  loadLastCommit() {
    var splittedRoute = this.project.repository.split('/');
    this.client.get(`https://api.github.com/repos/${splittedRoute[splittedRoute.length - 2]}/${splittedRoute[splittedRoute.length - 1]}/commits`)
      .subscribe((data: Array<any>) => {
        if (data.length > 0) {
          this.lastCommit = data[0];
        }
      });



  }



}
