import { Component, OnInit,Input } from '@angular/core';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css']
})
export class ProjectGalleryComponent implements OnInit {
  @Input() project:Project;

  constructor() { }

  ngOnInit() {
  }

}
