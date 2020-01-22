import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-info-card',
  templateUrl: './personal-info-card.component.html',
  styleUrls: ['./personal-info-card.component.css']
})
export class PersonalInfoCardComponent implements OnInit {
  @Input() info: any;
  serverDateTime: Date = null;
  constructor(private UI: UiService, private client: HttpClient) { }


  ngOnInit() {
    this.loadCurrentDate();
  }
  loadCurrentDate() {
    this.client.get("/",{observe: 'response',responseType:"text"}).subscribe((res: any) => {
      this.serverDateTime = new Date(res.headers.get('Date'));
    });
  }
  getAge() {
    let birthday = new Date("1999-01-15");
    var ageDifMs = this.serverDateTime.getTime() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  downloadResume() {
    window.open(this.info.resume_download_link, "_blank")
  }
}
