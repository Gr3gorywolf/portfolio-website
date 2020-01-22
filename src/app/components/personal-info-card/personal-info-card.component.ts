import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-personal-info-card',
  templateUrl: './personal-info-card.component.html',
  styleUrls: ['./personal-info-card.component.css']
})
export class PersonalInfoCardComponent implements OnInit {
@Input() info:any;
  constructor(private UI:UiService) { }

  ngOnInit() {
    
  }


  downloadResume(){
    window.open(this.info.resume_download_link,"_blank")
  }
}
