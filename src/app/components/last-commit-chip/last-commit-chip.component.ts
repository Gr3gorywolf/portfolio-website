import { Component, OnInit,Input } from '@angular/core';
import { ProjectHelper } from 'src/app/shared/helpers/ProjectHelper';
import { HttpClient } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-last-commit-chip',
  templateUrl: './last-commit-chip.component.html',
  styleUrls: ['./last-commit-chip.component.css']
})
export class LastCommitChipComponent implements OnInit {
  @Input() repository:string;
  helper:ProjectHelper=new ProjectHelper();
  lastCommit:any;
  constructor(public client: HttpClient) { }

  ngOnInit() {
    this.loadLastCommit();
  }

  loadLastCommit() {

    this.client.get(`https://api.github.com/repos/${this.helper.repoOwner(this.repository)}/${this.helper.repoName(this.repository)}/commits`)
      .subscribe((data: Array<any>) => {
        if (data.length > 0) {
          this.lastCommit = data[0];
        }
      });
  }
getHintTitle(lastCommit){
  let pipe = new DatePipe('en-US');
  return 'By: '+lastCommit.commit.author.name+'\n at '+ pipe.transform(lastCommit.commit.author.date);
}

}
