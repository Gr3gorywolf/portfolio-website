import { Component, OnInit,Input } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
import { Section } from 'src/app/shared/models/section';
declare var $:any;
@Component({
  selector: 'app-floating-navigator',
  templateUrl: './floating-navigator.component.html',
  styleUrls: ['./floating-navigator.component.css']
})
export class FloatingNavigatorComponent implements OnInit {

  @Input() sections:Array<Section>;
  constructor(public UI:UiService) { }

  ngOnInit() {
      if(localStorage.getItem("tutorialSeen") == null){
      $('.tap-target').tapTarget('open');
      localStorage.setItem("tutorialSeen","true");
    }


  }
  scrollToSection(sectionId) {
    console.log("xd");

    $('.material-tooltip').css("visibility", "hidden");

    $([document.documentElement, document.body]).animate({
      scrollTop: $('#' + sectionId).offset().top - 70
    }, 500);
  }
}
