import { Component, OnInit,Input } from '@angular/core';
import { Project } from 'src/app/shared/models/project';
declare var $:any;
@Component({
  selector: 'app-project-card-big',
  templateUrl: './project-card-big.component.html',
  styleUrls: ['./project-card-big.component.css']
})
export class ProjectCardBigComponent implements OnInit {

  @Input() project:Project;
  constructor() { }

  ngOnInit() {
  }
  executeDownload(selectedLink: string = null) {
    if (this.project.downloadLinks.length == 1) {
      window.open(this.project.downloadLinks[0].link, "_blank");
    }
    else
      if (this.project.downloadLinks.length > 1) {
        if (selectedLink == null) {
          $("#downloadOptionsDialog").modal("open");
        } else {
          window.open(selectedLink, "_blank");
        }

      }
  }
}
