import { Component } from '@angular/core';

import { ToastController } from 'ionic-angular';


import { Lists } from '../../lists/lists';
import { Map } from '../../map/map';
import { Home } from '../../home/home';

@Component({

  templateUrl: 'tabs.html',

      selector: 'tabs-top-menu'
})
export class TabsPage {

  // this tells the tabs component which Pages
  // should be each tab's root Page
  ListRoot: any = Lists;
  HomeRoot: any = Home;


  selectedTabIndex: number = 1;
  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";


  constructor(private toastCtrl: ToastController) {

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