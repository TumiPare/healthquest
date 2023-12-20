import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStorage } from 'src/app/user/user.storage';
import { ModalController } from '@ionic/angular';
import { interval } from 'rxjs';


@Component({
  selector: 'app-ad-modal',
  templateUrl: './ad-modal.component.html',
  styleUrls: ['./ad-modal.component.scss'],
})
export class AdModalComponent implements OnInit{

  counter = 5;
  adId = '25d3748899b6a7abd4bff21e3dbb7271'
  adSrc = 'https://cdn.shopify.com/s/files/1/2424/0281/files/USN_LOGO_ReflexBlue.png?height=628&pad_color=ffffff&v=1667397413&width=1200';
  adTitle = 'USN';
  adDescription = 'USN is a leading sports nutrition brand, supplying high-performance nutritional supplements, protein, and bodybuilding supplements.';

  intervalId: any;

  adIds = [
    "45d3748899b6a7abd4bff21e3dbb7289",
    "85d3748899b6a7abd4bff21e3dbb7279",
    "25d3748899b6a7abd4bff21e3dbb7278",
    "55d3748899b6a5abd4bff21e3dbb7268", 
    "25d3748899b6a7ab64bff21e3dbb7223",
    "35d3748899b6a7afs4bff21e3dbb7271",
    "15d3748899b6a7abd4bff2323dbb7245",
  ];

  srcs = [
    'https://i.pinimg.com/originals/1c/2b/8e/1c2b8ebbeb29f6c474bed7b5287c5937.gif',
    'https://media.livingfit.co.za/wp-content/uploads/6009702506487-winners-energy-hydration-drink-exotic-berry-500g.jpg',
    'https://image.isu.pub/230529091125-d7721b2642bb701b4d714d7bfba60424/jpg/page_1_thumb_large.jpg',
    'https://m.media-amazon.com/images/S/abs-image-upload-na/a/AmazonStores/ATVPDKIKX0DER/8b6140bc3f2fc68df2f4893c98508e8a.w1000.h1000._CR0%2C0%2C1000%2C1000_SX750_SY750_.jpg',
    'https://cdn.shopify.com/s/files/1/2424/0281/files/USN_LOGO_ReflexBlue.png?height=628&pad_color=ffffff&v=1667397413&width=1200',
    'https://media.tenor.com/pqug-EqhwRYAAAAC/lifting-barbell-lifting.gif',
    'https://media.tenor.com/bLND1RBBWZoAAAAd/gym-bodybuilder.gif',
    'https://images.healthshots.com/healthshots/en/uploads/2023/05/10200007/exercise-1600x900.jpg',
    'https://media.post.rvohealth.io/wp-content/uploads/2020/02/man-exercising-plank-push-up-1200x628-facebook.jpg',
    'https://domf5oio6qrcr.cloudfront.net/medialibrary/2293/l0908b16207233934035.jpg',
    'https://img1.wsimg.com/isteam/stock/12327',
    'https://www.trxtraining.com/cdn/shop/articles/functional-dumbbell-exercises_1024x.jpg?v=1687764205', 
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2023/08/Calisthenic.jpeg.jpg',
    'https://im.idiva.com/content/2011/Sep/how_fit_are_you.jpg'
  ]

  adTitles = [
    'USN', 'USN Health', 'USN Supplements'
  ];

  adDescriptions = [
    "Enhance your performance with USN supplements.",
    "Fuel your fitness journey with USN supplements.",
    "Achieve your goals with USN's high-quality supplements.",
    "Experience the power of USN nutrition supplements.",
    "USN supplements: Your partner in fitness success.",
    "Elevate your training with USN's trusted supplements.",
    "Train harder, recover faster with USN supplements.",
    "Unlock your potential with USN nutrition.",
    "USN: Your source for premium fitness supplements.",
    "Reach new heights with USN's cutting-edge supplements."
  ];

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private userStorage: UserStorage
    ) { }


  ngOnInit() {

    this.adSrc = this.srcs[Math.floor(Math.random() * this.srcs.length)];
    this.adTitle = this.adTitles[Math.floor(Math.random() * this.adTitles.length)];
    this.adDescription = this.adDescriptions[Math.floor(Math.random() * this.adDescriptions.length)];

    this.intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      if(this.counter === 0) { 
        clearInterval(this.intervalId);
        this.authService.postAdTime(this.adIds[Math.floor(Math.random() * this.adIds.length)] , 'watched');
        this.modalCtrl.dismiss();
      }
    }, 1000)
  }

  confirm() {
    this.authService.postAdTime(this.adIds[Math.floor(Math.random() * this.adIds.length)], 'skipped');
    clearInterval(this.intervalId);
    this.modalCtrl.dismiss();
  }

  openUSN() {
    window.open('https://www.usn.co.za/', '_blank')
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    this.adSrc = this.srcs[Math.floor(Math.random() * this.srcs.length)];
    this.adTitle = this.adTitles[Math.floor(Math.random() * this.adTitles.length)];
    this.adDescription = this.adDescriptions[Math.floor(Math.random() * this.adDescriptions.length)];
  }

}
