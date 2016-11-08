import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Moyens page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-moyens',
  templateUrl: 'moyens.html'
})
export class MoyensPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MoyensPage Page');
  }

}
