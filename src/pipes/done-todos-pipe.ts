import {Injectable, Pipe} from '@angular/core';
import {TodoModel} from "../shared/todo-model";

@Pipe({
    name: 'doneTodosPipe'
})
@Injectable()
export class DoneTodosPipe {

    transform(todos: TodoModel[]) {
        return todos.filter(todo=>todo.isDone);
    }
}
