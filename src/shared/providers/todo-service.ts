import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TodoModel} from '../todo-model';
//import {NativeStorage} from 'ionic-native';
import {Storage} from '@ionic/storage';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class TodoService {

    public todos: TodoModel[] = [];
    private local: Storage;

    constructor(public http: Http) {
        this.local = new Storage();
    }

    public loadFromList(id: number) {
        let promise = this.getFromLocal(id);

        Observable.fromPromise(promise).subscribe(
            (todos:TodoModel[])=> {
                this.todos = todos;
            },
            error => {
                console.log('Error loading data', error)
            }
        );
    }

    private getFromLocal(id: number) {

        return this.local.get(`list/${id}`).then(
            data => {
                let localTodos: TodoModel[] = [];

                if (!data) {
                    return localTodos;
                }

                data = JSON.parse(data);

                for (let todo of data) {
                    localTodos.push(TodoModel.clone(todo));
                }

                return localTodos;
            },
            error => console.error(error)
        );

    }

    addTodo(todo: TodoModel): any {

        this.todos = [...this.todos, todo];

        let promise = this.saveLocally(todo.id);

        return Observable.fromPromise(promise);
    }

    public saveLocally(id: number) {
        //localStorage.setItem(`list/${id}`, JSON.stringify(this.todos));

        return this.local.set(`list/${id}`, JSON.stringify(this.todos));
    }

    toogleTodo(todo: TodoModel):any {
        let updatedTodo = TodoModel.clone(todo);
        updatedTodo.isDone = !todo.isDone;
        return this.updateTodo(todo, updatedTodo).subscribe(
            ()=> {
            },
            ()=> {
                this.loadFromList(todo.listId)
            });
    }

    removeTodo(todo: TodoModel):any {

        const index = this.todos.indexOf(todo);

        this.todos = [
            ...this.todos.slice(0, index),
            ...this.todos.slice(index + 1)
        ];

        let promise = this.saveLocally(todo.listId).then(()=> {
        }, error=>console.log(error));

        return Observable.fromPromise(promise)
    }

    updateTodo(originalTodo: TodoModel, modifiedTodo: TodoModel): any {
        const index = this.todos.indexOf(originalTodo);

        this.todos = [
            ...this.todos.slice(0, index),
            modifiedTodo,
            ...this.todos.slice(index + 1)
        ];

        let promise = this.saveLocally(modifiedTodo.listId);

        return Observable.fromPromise(promise);
    }
}
