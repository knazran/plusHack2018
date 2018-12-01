import { Component, OnInit, OnDestroy} from '@angular/core';
import { ToastController, Platform} from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-start-trip',
  templateUrl: './start-trip.page.html',
  styleUrls: ['./start-trip.page.scss'],
})
export class StartTripPage implements OnInit {
  take_break_audio: any;
  constructor(private toastCtrl: ToastController, private nativeAudio: NativeAudio,
              private platform: Platform) {
    platform.ready().then(() => {
      this.nativeAudio.preloadComplex('take_break_audio', '../../assets/take_a_break.mp3', 1, 1, 0);
    });
  }

  ngOnInit() {
  }

  async toastTakeABreak() {
    this.nativeAudio.play('take_break_audio', () => {console.log('played'); toast.dismiss(); } );
    const toast = await this.toastCtrl.create({
      // tslint:disable-next-line:quotemark
      message: "We have been driving for 2 hours. Let's take a break?",
      position: 'bottom',
      duration: 5000,
      color: 'warning',
      cssClass: 'plussie-talks'
    });
    toast.present();
  }

}
