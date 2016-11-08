import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Clients page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html'
})
export class ClientsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ClientsPage Page');
  }

}
