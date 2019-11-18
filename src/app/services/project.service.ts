import { Injectable } from '@angular/core';
import projectsEng from '../../assets/data/projects.eng.json';
import projectsEsp from '../../assets/data/projects.esp.json';
import { AppInfo } from '../models/appInfo.js';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Array<AppInfo> = [];
  constructor() {


  }
  init() {
    this.projects = projectsEng;
  }
  getProjectByRepo(repoName: string):AppInfo {
    for (let proj of this.projects) {
           if(proj.repository.endsWith(repoName)){
             return proj;
           }
    }
  }

}
