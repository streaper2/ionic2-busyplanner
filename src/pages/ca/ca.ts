import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Ca page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ca',
  templateUrl: 'ca.html'
})
export class CaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CaPage Page');
  }

}
