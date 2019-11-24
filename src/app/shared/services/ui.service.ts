import { Injectable } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public navbarVisible = true;
  public navbarTitle ='';
  public backgroundColor ='#ff914d'
  public navbarAccentColor ='#ff914d'
  constructor(public router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
         this.backgroundColor = '#ff914d';
         this.navbarAccentColor = '#ff914d';
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });

  }
}
