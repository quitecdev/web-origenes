import { Component, OnInit } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  customOptions: any = {
    loop: true,
    dots: false,
    navSpeed: 700,
    margin: 15,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptions2: any = {
    loop: true,
    dots: false,
    navSpeed: 700,
    margin: 15,
    items: 1,
    navText: ['', ''],
    nav: true
  }

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };

  constructor() {}

  ngOnInit() {
    this.CargarComponentes();
  }


  CargarComponentes(){
    //Vdeo Background
    $(".video-bg").YTPlayer();

    //Testimonial Carousel
    $("#testimonial-carousel").owlCarousel({
      loop: true,
      margin: 15,
      center: true,
      autoplay: true,
      smartSpeed: 500,
      items: 1,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });

  }

}


//https://ng-bootstrap.github.io/#/getting-started
