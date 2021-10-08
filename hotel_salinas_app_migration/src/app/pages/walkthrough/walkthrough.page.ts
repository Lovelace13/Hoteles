import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})

export class WalkthroughPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  showSkip = true;
  slideOpts = {
    effect: 'flip',
    speed: 1000
  };
  dir: String = 'ltr';

  slideList: Array<any> = [
    {
      title: 'Welcome to <strong>Oceana</strong>',
      description: 'Oceana is your best choice to stay in Galapagos Island ...',
      //image: 'assets/img/hotel-sp01.png',
      image: 'assets/Oceana_/Recursos/Oceana-.png',
    },
    {
      title: 'Why Oceana?',
      description: 'Because we count with so many years on the hotel industry to bring you the best experience throug ...',
      //image: 'assets/img/hotel-sp02.png',
      image: 'assets/Oceana_/Recursos/Oceana-.png',
    },
    {
      title: 'Your Vacation is coming!',
      description: 'Come to Oceana and let us ...',
      //image: 'assets/img/hotel-sp03.png',
      image: 'assets/Oceana_/Recursos/Oceana-.png',
    }
  ];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public router: Router
  ) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  onSlideNext() {
    this.slides.slideNext(1000, false);
  }

	onSlidePrev() {
    this.slides.slidePrev(300);
  }

  openHomePage() {
    this.navCtrl.navigateRoot('/home');
  }

  openLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}
