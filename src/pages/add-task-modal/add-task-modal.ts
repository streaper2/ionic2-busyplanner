import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';
import {TodoModel} from "../../shared/todo-model";


@Component({
    selector: 'page-add-task-modal',
    templateUrl: 'add-task-modal.html'
})
export class AddTaskModal {

    public model:TodoModel;
    public title:string = "Add new task";
    public buttonText:string = "ADD";

    constructor(public viewCtrl: ViewController, private navParams:NavParams) {
        if (this.navParams.get('todo')) {
            this.model = TodoModel.clone(this.navParams.get('todo'));
            this.title = "Edit Task";
            this.buttonText = "Save Changes";
        }else{
            let listId = this.navParams.get('listId');
            this.model = new TodoModel('',listId);
        }
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }

    submit(){
        this.viewCtrl.dismiss(this.model);
    }

}
