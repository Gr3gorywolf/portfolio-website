import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-gregoryscroll',
  templateUrl: './gregoryscroll.component.html',
  styleUrls: ['./gregoryscroll.component.css']
})
export class GregoryscrollComponent implements OnInit, OnDestroy {

  constructor() { }
  index = 0;
  languajeList: Array<any> = [
    {
      "name": "C#",
      "colorPrimary": "purple",
      "colorSecondary": "grey"
    },
    {
      "name": "JS",
      "colorPrimary": "#ffb300",
      "colorSecondary": "grey"
    },
    {
      "name": "TS",
      "colorPrimary": "Blue",
      "colorSecondary": "grey"
    },
    {
      "name": "CSS",
      "colorPrimary": "grey",
      "colorSecondary": "green"
    },
    {
      "name": "HTML",
      "colorPrimary": "grey",
      "colorSecondary": "orange"
    },
    {
      "name": "XAML",
      "colorPrimary": "grey",
      "colorSecondary": "#8e24aa"
    },
    {
      "name": "Dart",
      "colorPrimary": "blue",
      "colorSecondary": "grey"
    },
    {
      "name": "PHP",
      "colorPrimary": "purple",
      "colorSecondary": "grey"
    },

  ]


  languaje: string;
  intervalId: any;
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  ngOnInit() {
    $(".cls-30").css("fill", "white");
    this.intervalId =    setInterval(() => {
      if (this.index < this.languajeList.length) {
        this.index++;
      } else {
        this.index = 0
      }
      let languajeItem = this.languajeList[this.index];
      this.languaje = languajeItem.name;
      $(".cls-26").css("fill", languajeItem.colorPrimary);
      $(".cls-27").css("fill", languajeItem.colorSecondary);
    }, 1000)

  }



}
