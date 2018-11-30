import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pre-trip',
  templateUrl: './pre-trip.page.html',
  styleUrls: ['./pre-trip.page.scss'],
})
export class PreTripPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  closePopover() {
    this.popoverCtrl.dismiss();
  }
}
