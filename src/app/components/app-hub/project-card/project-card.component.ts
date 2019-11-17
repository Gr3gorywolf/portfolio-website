import { Component, OnInit,Input } from '@angular/core';
import { AppInfo } from 'src/app/models/appInfo';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() project:AppInfo;
}
