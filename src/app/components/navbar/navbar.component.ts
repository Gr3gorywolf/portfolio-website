import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public UI:UiService) { }

  ngOnInit() {
  }

  closeSideMenu(){
    $(".button-collapse").sideNav('hide');
  }
}
