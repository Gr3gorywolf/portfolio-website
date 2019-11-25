import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public UI:UiService) { }

  ngOnInit() {
     this.UI.navbarVisible=true;
     this.UI.navbarTitle="About Me";
  }

}
