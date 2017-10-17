import { Component } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
// import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-vw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  siteTitle = 'Veggie World';
  logoUrl = './../assets/images/logo-only.png';
  logoTitle = './../assets/images/logo-title.png';

  // constructor(router:Router) {
  //   router.events.forEach((event) => {
  //     if(event instanceof NavigationStart) {
  //     }
  //     // NavigationEnd
  //     // NavigationCancel
  //     // NavigationError
  //     // RoutesRecognized
  //   });
  }
}
