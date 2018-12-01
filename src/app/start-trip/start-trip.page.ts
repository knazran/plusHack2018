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
  rnr_audio: any;
  congestion_audio: any;
  redirect_audio: any;
  thanks_audio: any;

  plussie_img = '../../assets/icon/plussie.png';

  plussie_count = 0;

  take_a_break_audio: any;
  constructor(private toastCtrl: ToastController, private nativeAudio: NativeAudio,
              private platform: Platform) {
  }

  ngOnInit() {
    this.take_a_break_audio = new Audio();
    this.take_a_break_audio.src = '../assets/take_a_break.mp3';
    this.take_a_break_audio.load();

    this.rnr_audio = new Audio();
    this.rnr_audio.src = '../assets/lets_go_rnr.mp3';
    this.rnr_audio.load();

    this.congestion_audio = new Audio();
    this.congestion_audio.src = '../assets/congestion_alert.mp3';
    this.congestion_audio.load();

    this.redirect_audio = new Audio();
    this.redirect_audio.src = '../assets/redirect.mp3';
    this.redirect_audio.load();

    this.thanks_audio = new Audio();
    this.thanks_audio.src = '../assets/thankyou.mp3';
    this.thanks_audio.load();
  }


  async toastTakeABreak() {

    // Hacky ASS shit FUCKING WHY
    if (this.plussie_count === 0) {
      this.take_a_break_audio.play();
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

    if (this.plussie_count === 1) {
      this.plussie_img = '../../assets/icon/plussie_happy.png';
      this.rnr_audio.play();
      const toast = await this.toastCtrl.create({
        // tslint:disable-next-line:quotemark
        message: "Nearest RnR is Ayer Keroh. Let's go?",
        position: 'bottom',
        duration: 8000,
        color: 'primary',
        cssClass: 'plussie-talks'
      });
      toast.onDidDismiss().then(data => {
        this.plussie_img = '../../assets/icon/plussie.png';
      });
      toast.present();
    }

    if (this.plussie_count === 2) {
      this.plussie_img = '../../assets/icon/plussie_omg.png';
      this.congestion_audio.play();
      const toast = await this.toastCtrl.create({
        // tslint:disable-next-line:quotemark
        message: "Congestion head due to heavy rain.",
        position: 'bottom',
        duration: 12000,
        color: 'danger',
        cssClass: 'plussie-talks'
      });
      toast.onDidDismiss().then(data => {
        this.plussie_img = '../../assets/icon/plussie.png';
      });
      toast.present();
    }

    if (this.plussie_count === 3) {
      this.plussie_img = '../../assets/icon/plussie_happy.png';
      this.redirect_audio.play();
      const toast = await this.toastCtrl.create({
        // tslint:disable-next-line:quotemark
        message: "Redirecting to Exit 213. Will be arriving on time.",
        position: 'bottom',
        duration: 7000,
        color: 'success',
        cssClass: 'plussie-talks'
      });
      toast.present();

      toast.onDidDismiss().then(data => {
        this.plussie_img = '../../assets/icon/plussie.png';
      });
    }

    if (this.plussie_count === 4) {
      this.plussie_img = '../../assets/icon/plussie_happy.png';
      this.thanks_audio.play();
      const toast = await this.toastCtrl.create({
        // tslint:disable-next-line:quotemark
        message: "No problem",
        position: 'bottom',
        duration: 3000,
        color: 'primary',
        cssClass: 'plussie-talks'
      });
      toast.present();
      toast.onDidDismiss().then(data => {
        this.plussie_img = '../../assets/icon/plussie.png';
      });
      this.plussie_count = 0;
    }
    this.plussie_count = this.plussie_count + 1;
  }

}
