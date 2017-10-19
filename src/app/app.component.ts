import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-vw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  siteTitle = 'Veggie World';
  logoUrl = './../assets/images/logo-only.png';
  logoTitle = './../assets/images/logo-title.png';
  innerHeight: any;
  backgroundRouter: any;

  ngOnInit() {
  }

  constructor(router: Router, private route: ActivatedRoute) {
    this.innerHeight = (window.screen.height);


    // On écoute les évènements émis par le router
    router.events.forEach((event: NavigationEvent) => {
      // Après Navigation
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        switch (event.url) {
          case '/rechercher':
            {
            this.backgroundRouter = { url: './../assets/images/veggie-world-background.jpg', sliderMode: true };
              break;
            }
          case '/contact':
            {
              this.backgroundRouter = { url: './../assets/images/background-contact-form.png', sliderMode: false };
              break;
            }
          case '/home':
            {
              this.backgroundRouter = { url: './../assets/images/veggie-world-background.jpg', sliderMode: true };
              break;
            }
          case '/404':
            {
              this.backgroundRouter = { url: './../assets/images/404.jpg', sliderMode: true };
              break;
            }
          default:
            // Instructions à exécuter lorsqu'aucune des valeurs ne correspond 
            {
            this.backgroundRouter = { url: './../assets/images/background-contact-form.png', sliderMode: false };
              break;
            }
        }
      }
    });
  }
}
