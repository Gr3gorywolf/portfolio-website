import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
import { HttpClient } from '@angular/common/http';
import { ProjectHelper } from 'src/app/shared/helpers/ProjectHelper';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  lastCommit: any = null;
  helper:ProjectHelper=new ProjectHelper();
  constructor() { }

  ngOnInit() {

  }

  getRepositoryName() {


    return this.helper.repoName(this.project.repository);
  }





}
