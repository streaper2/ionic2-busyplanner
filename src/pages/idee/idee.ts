import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Ca page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-idee',
  templateUrl: 'idee.html'
})
export class IdeePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello IdeePage Page');
  }

}
