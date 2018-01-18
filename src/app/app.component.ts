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
  photo: any;
  ngOnInit() {
  }

  constructor(router: Router, private route: ActivatedRoute) {
    this.innerHeight = (window.screen.height);


    // On écoute les évènements émis par le router
    router.events.forEach((event: NavigationEvent) => {
      // Après Navigation, on va écouter l'évènement de la navigation
      // pour déterminer quelle est l'urlAfterRedirects
      // On peut ainsi changer le background proprement en fonction de l'url réellement dans l'adresse
      if (event instanceof NavigationEnd) {
        console.log(event);
        switch (event.urlAfterRedirects) {
          case '/rechercher':
            {
            this.backgroundRouter = './../assets/images/veggie-world-background.jpg';
            this.photo = `url(${this.backgroundRouter})`;
            //this.innerHeight = sliderMode: true };
              break;
            }
          case '/contact':
            {
              this.backgroundRouter = './../assets/images/background-contact-form.png';
              this.photo = `url(${this.backgroundRouter})`;
              // sliderMode: false };
              break;
            }
          case '/home':
            {
              this.backgroundRouter = './../assets/images/veggie-world-background.jpg';
              this.photo = `url(${this.backgroundRouter})`;
              //, sliderMode: true };
              break;
            }
          case '/404':
            {

              console.log('sa mère chui 404');
              this.backgroundRouter = './../assets/images/404.jpg';
              this.photo = `url(${this.backgroundRouter})`;
              //, sliderMode: true };
              break;
            }
          default:
            // Instructions à exécuter lorsqu'aucune des valeurs ne correspond 
            {
            this.backgroundRouter = './../assets/images/background-contact-form.png';
            //, sliderMode: false };
            this.photo = `url(${this.backgroundRouter})`;

              break;
            }
        }
      }
    });
  }
}
