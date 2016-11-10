import {Component, Input} from '@angular/core';
import {NavController, ModalController, Platform, NavParams, LoadingController} from 'ionic-angular';


import {TodoService} from '../../shared/providers/todo-service';
import {ListModel} from "../../shared/list-model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

    public list: ListModel;

  constructor(public navCtrl: NavController, 
              private modalCtrl: ModalController,
              public todoService: TodoService,
              private platform: Platform,
              private navParams: NavParams,
              private loadingCtrl: LoadingController
              ) {

  this.list = this.navParams.get('list');
                }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

}