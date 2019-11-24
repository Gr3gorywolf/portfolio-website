import { Injectable } from '@angular/core';
import projectsEng from '../../../assets/data/projects.eng.json';
import projectsEsp from '../../../assets/data/projects.esp.json';
import { Project } from '../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Array<Project> = [];
  constructor() {


  }
  init() {
    this.projects = projectsEng;
  }
  getProjectByRepo(repoName: string):Project {
    for (let proj of this.projects) {
           if(proj.repository.endsWith(repoName)){
             return proj;
           }
    }
  }

}
