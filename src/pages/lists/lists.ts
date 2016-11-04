import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';
import {Todos} from "../todos/todos";
import {ListsService} from "../../shared/providers/lists-service";
import {ListModel} from "../../shared/list-model";

@Component({
    selector: 'page-lists',
    templateUrl: 'lists.html'
})
export class Lists {

    public selectedList: ListModel = null;

    constructor(public navCtrl: NavController, private alertCtrl: AlertController, public listService: ListsService, private loadingCtrl: LoadingController) {
    }

    goToList(list: ListModel) {
        this.navCtrl.push(Todos, {list});
    }

    showAddList() {
        let prompt = this.alertCtrl.create({
            title: 'Nouveau business plan',
            message: "Ajouter un titre",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: data => {
                        let navTransition = prompt.dismiss();
                        navTransition.then(()=> {
                            this.addNewList(data.name)
                        });
                    }
                }
            ]
        });
        prompt.present();
    }

    addNewList(name: string) {
        let loading = this.loadingCtrl.create();

       // loading.present();

        this.listService.addList(name).subscribe(
            (list) => {
                console.log(list);
                // this.goToList(list);
                // loading.dismiss();
            },
            ()=> {
                loading.dismiss();
            }
        );
    }

    clearSelectedList() {
        this.selectedList = null;
    }

    selectList(list: ListModel) {
        if (this.selectedList == list) {
            this.clearSelectedList();
        } else {
            this.selectedList = list;
        }
    }

    removeSelectedList() {
        this.listService.removeList(this.selectedList);
        this.selectedList = null;
    }


}
