import {Component} from '@angular/core';
import {NavController, ModalController, Platform, NavParams, LoadingController} from 'ionic-angular';

import {TodoModel} from '../../shared/todo-model';
import {TodoService} from '../../shared/providers/todo-service';
import {AddTaskModal} from '../add-task-modal/add-task-modal';
import {ListModel} from "../../shared/list-model";


@Component({
    selector: 'page-todos',
    templateUrl: 'todos.html'

})
export class Todos {

    private toogleTodoTimeOut = null;
    public list: ListModel;

    constructor(public navCtrl: NavController,
                private modalCtrl: ModalController,
                public todoService: TodoService,
                private platform: Platform,
                private navParams: NavParams,
                private loadingCtrl: LoadingController) {

        this.list = this.navParams.get('list');
        console.log(this.list.id);
        this.todoService.loadFromList(this.list.id);
    }

    ionViewWillUnload() {
        this.todoService.saveLocally(this.list.id);
    }


    setTodoStyles(item: TodoModel) {
        return {
            'text-decoration': item.isDone ? 'line-through' : 'none',
            'font-weight': item.isImportant ? '600' : 'normal'
        };
    }

    showAddTodo() {
        let modal = this.modalCtrl.create(AddTaskModal, {listId: this.list.id});
        modal.present();

        modal.onDidDismiss(todo=> {
            if (todo) {
                this.addToDo(todo);
            }
        });
    }

    addToDo(todo: TodoModel) {
        let loader = this.loadingCtrl.create();
        loader.present();
        this.todoService.addTodo(todo).subscribe(
            ()=> loader.dismiss(),
            ()=> loader.dismiss()
        );
    }

    toogleTodo(todo: TodoModel) {
        if (this.toogleTodoTimeOut) {
            return;
        }

        this.toogleTodoTimeOut = setTimeout(()=> {
            this.todoService.toogleTodo(todo);
            this.toogleTodoTimeOut = null;
        }, this.platform.is('ios') ? 0 : 300);

    }

    removeTodos(todo: TodoModel) {
        this.todoService.removeTodo(todo);
    }

    showEditTodo(todo: TodoModel) {
        let modal = this.modalCtrl.create(AddTaskModal, {todo});
        modal.present();

        modal.onDidDismiss(data=> {
            if (data) {
                this.updateTodo(todo, data);
            }
        });
    }

    updateTodo(originalTodo: TodoModel, modifiedTodo: TodoModel) {
        let loader = this.loadingCtrl.create();
        loader.present();
        this.todoService.updateTodo(originalTodo, modifiedTodo).subscribe(
            ()=> loader.dismiss(),
            ()=> loader.dismiss()
        );
    }
}
