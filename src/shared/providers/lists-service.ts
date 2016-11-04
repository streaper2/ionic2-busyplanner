import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromPromise';
import {ListModel} from "../list-model";
//import {NativeStorage} from 'ionic-native';
import {Storage} from '@ionic/storage';


@Injectable()
export class ListsService {

    public lists: ListModel[] = [];
    private local: Storage;

    constructor(public http: Http) {
        this.local = new Storage();
        this.get();
    }

    private get(): any {
        let promise = this.getStorage();

        return Observable.fromPromise(promise).subscribe(
            (result: ListModel[])=> {
                this.lists = result;
            },
            error => {
                console.log('Error loading data', error)
            }
        );
    }

    public addList(name: string): any {

        let list = new ListModel(name, this.lists.length);
        this.lists = [...this.lists, list];

        let promise = this.saveStorage();

        return Observable.fromPromise(promise).map(()=>{return list});
    }


    private getStorage() {

        // NativeStorage.getItem('lists')
        //     .then(
        //         data => {
        //             let localLists: ListModel[] = [];
        //             if (data) {
        //                 data = JSON.parse(data);
        //                 for (let list of data) {
        //                     localLists.push(new ListModel(list.name, list.id));
        //                 }
        //             }
        //             this.lists = localLists;
        //         },
        //         error => console.error(error)
        //     );


        // let lists = localStorage.getItem('lists');
        //
        // let localLists: ListModel[] = [];
        //
        // if (lists) {
        //     lists = JSON.parse(lists);
        //     for (let list of lists) {
        //         localLists.push(new ListModel(list.name, list.id));
        //     }
        // }
        //
        // this.lists = localLists;

        return this.local.get('lists').then(
            data => {
                let localLists: ListModel[] = [];
                if (data) {
                    data = JSON.parse(data);
                    for (let list of data) {
                        localLists.push(new ListModel(list.name, list.id));
                    }
                }

                return localLists;
            },
            error => console.error('Error From Local', error)
        );

    }

    public saveStorage() {
        // NativeStorage.setItem('lists', JSON.stringify(this.lists))
        //     .then(
        //         () => console.log('Stored item!'),
        //         error => console.error('Error storing item', error)
        //     );

        //localStorage.setItem('lists', JSON.stringify(this.lists));

        return this.local.set('lists', JSON.stringify(this.lists)).then(()=>{},()=>{});
    }

    public removeList(list: ListModel): any {
        let index = this.lists.indexOf(list);
        this.lists = [...this.lists.slice(0, index), ...this.lists.slice(index + 1)];
        let promise = this.saveStorage().then(()=> {
        }, error=>console.log(error));

        return Observable.fromPromise(promise);
    }

}
