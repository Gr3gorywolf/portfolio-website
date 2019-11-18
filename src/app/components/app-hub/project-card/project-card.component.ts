import { Component, OnInit, Input } from '@angular/core';
import { AppInfo } from 'src/app/models/appInfo';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: AppInfo;
  constructor() { }

  ngOnInit() {
  }

  getRepositoryName() {
    var splittedRoute = this.project.repository.split('/');
    return splittedRoute[splittedRoute.length-1];
 }




}
