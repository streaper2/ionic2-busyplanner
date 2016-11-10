import { Component } from '@angular/core';

import { ToastController,NavController,NavParams } from 'ionic-angular';


import { Home } from '../../home/home';
import {CaPage} from '../../ca/ca';
import {ClientsPage} from "../../clients/clients";
import {InfoPage} from "../../info/info";
import {InvestissementsPage} from "../../investissements/investissements";
import {MoyensPage} from "../../moyens/moyens";
import {ProductPage} from "../../product/product";
import {IdeePage} from "../../idee/idee";
import {ListModel} from "../../../shared/list-model";

@Component({

  templateUrl: 'tabs.html',

      selector: 'tabs-top-menu'
})
export class TabsPage {

  // this tells the tabs component which Pages
  // should be each tab's root Page
  HomeRoot:         any = Home;
  CaPageRoot:       any = CaPage;
  ClientsPageRoot:  any = ClientsPage;
  InfoPageRoot:     any = InfoPage;
  InvestissementsPageRoot: any = InvestissementsPage;
  MoyensPageRoot:   any = MoyensPage;
  ProductPageRoot:  any = ProductPage;
  IdeePageRoot:  any = IdeePage;


  selectedTabIndex: number = 1;
  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";
  
     public list: ListModel;

  constructor(private toastCtrl: ToastController, public navCtrl: NavController,private navParams: NavParams,) {
    this.list = this.navParams.get('list');
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }

  presentChangeOrendationToast() {
    let toast = this.toastCtrl.create({
      message: 'Rotate screen to rerendering.',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}