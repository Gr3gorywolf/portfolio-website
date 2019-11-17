import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-app-hub',
  templateUrl: './app-hub.component.html',
  styleUrls: ['./app-hub.component.css']
})
export class AppHubComponent implements OnInit {

  constructor(public UI:UiService) { }

  ngOnInit() {
    setTimeout(() => {
      this.UI.navbarTitle = "App Hub";
      this.UI.navbarVisible = true;
    }, 50);


  }

}
