import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PreTripPage} from '../pre-trip/pre-trip.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public modalController: ModalController, private popoverCtrl: PopoverController) {

  }

  // async presentPreTrip() {
  //   const modal = await this.modalController.create({
  //     component: PreTripPage,
  //   });
  //   return await modal.present();
  // }

  // async presentPreTrip() {
  //   const modal = await this.modalController.create({
  //     component: PreTripPage,
  //     componentProps: { value: 123 },
  //     // showBackdrop: true,
  //     cssClass: 'select-modal'
  //   });
  //   return await modal.present();
  // }
  async presentPreTrip(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PreTripPage,
      cssClass: 'select-modal',
      translucent: false
    });
    return await popover.present();
  }

}
