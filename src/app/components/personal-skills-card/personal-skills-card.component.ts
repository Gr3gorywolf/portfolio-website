import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-personal-skills-card',
  templateUrl: './personal-skills-card.component.html',
  styleUrls: ['./personal-skills-card.component.css']
})
export class PersonalSkillsCardComponent implements OnInit {


  @Input() info:any;
  @Input() category:string;
  constructor() { }

  ngOnInit() {
  }

}
