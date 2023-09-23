import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserStorage } from 'src/app/user/user.storage';

@Component({
  selector: 'app-go-premium-modal',
  templateUrl: './go-premium-modal.component.html',
  styleUrls: ['./go-premium-modal.component.scss'],
})
export class GoPremiumModalComponent {

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private userStorage: UserStorage
    ) { }

  cancel() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    this.authService.goPremium().subscribe((resp: any) => {
      this.userStorage.user = resp;
      this.authService.typeUser.next(this.userStorage.user.type);
      console.log(this.userStorage.user);
      this.modalCtrl.dismiss();
    });
  }

}
