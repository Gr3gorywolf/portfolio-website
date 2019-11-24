import { Component, OnInit,Input } from '@angular/core';
import { AppInfo } from 'src/app/models/appInfo';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css']
})
export class ProjectGalleryComponent implements OnInit {
  @Input() project:AppInfo;

  constructor() { }

  ngOnInit() {
  }

}
