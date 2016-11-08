import {Component, Input} from '@angular/core';
import {NavController, ModalController, Platform, NavParams, LoadingController} from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

@Input() todos: any;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,

                private platform: Platform,
                private navParams: NavParams) {


                }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}