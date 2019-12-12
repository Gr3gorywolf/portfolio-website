import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
import infoEng from '../../../assets/data/personalinfo.eng.json';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
info:any=infoEng;
  constructor(public UI:UiService) { }

  ngOnInit() {
     this.UI.navbarVisible=true;
     this.UI.navbarTitle="About Me";
  }

}
