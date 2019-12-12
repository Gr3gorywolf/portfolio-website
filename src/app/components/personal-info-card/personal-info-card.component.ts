import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info-card',
  templateUrl: './personal-info-card.component.html',
  styleUrls: ['./personal-info-card.component.css']
})
export class PersonalInfoCardComponent implements OnInit {
@Input() info:any;
  constructor() { }

  ngOnInit() {

  }


  downloadResume(){
    window.open(this.info.resume_download_link,"_blank")
  }
}
