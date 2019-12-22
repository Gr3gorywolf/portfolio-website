import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() commits:Array<any>=null;
  @Input() studies:Array<any>=null;
  @Input() professionalExperience:Array<any>=null;
  constructor() { }

  ngOnInit() {
  }




}
