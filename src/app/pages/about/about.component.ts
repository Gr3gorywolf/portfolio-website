import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
import infoEng from '../../../assets/data/personalinfo.eng.json';
import { Section } from 'src/app/shared/models/section.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
info:any=infoEng;

sections: Array<Section> = [
  {
    Title: 'Gregory Cabral',
    Icon: 'person',
    Id:'sec0'
  },
  {
    Title: 'About Me',
    Icon: 'info',
    Id:'sec1'
  },
  {
    Title: 'Programming and markup languajes',
    Icon: 'code',
    Id:'sec2'
  },
  {
    Title: 'Technologies and frameworks',
    Icon: 'build',
    Id:'sec3'
  }
  ,
  {
    Title: 'Education',
    Icon: 'school',
    Id:'sec4'
  }
]

  constructor(public UI:UiService) { }

  ngOnInit() {
     this.UI.navbarVisible=true;
     this.UI.navbarTitle="About Me";
  }

}
