import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-personal-skills-card',
  templateUrl: './personal-skills-card.component.html',
  styleUrls: ['./personal-skills-card.component.css']
})
export class PersonalSkillsCardComponent implements OnInit {


  categories:Array<string>=[

    "languaje",
    "framework",
  ]
  @Input() info:any;
  public skills:Array<any> = [];

  constructor() { }

  ngOnInit() {
   this.skills = this.info.skills.sort((a,b)=>{
     return b.status - a.status;
   });
  }

}
