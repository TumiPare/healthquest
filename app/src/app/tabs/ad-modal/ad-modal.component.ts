import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStorage } from 'src/app/user/user.storage';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-ad-modal',
  templateUrl: './ad-modal.component.html',
  styleUrls: ['./ad-modal.component.scss'],
})
export class AdModalComponent implements OnInit{

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private userStorage: UserStorage
    ) { }


  ngOnInit() {
    
  }
    

  cancel() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    this.modalCtrl.dismiss();
  }

  openUSN() {
    window.open('https://www.usn.co.za/', '_blank')
  }

}
