import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  ///the sizes can be small, and big
  @Input() size:string;
  constructor() { }

  ngOnInit() {
  }

}
