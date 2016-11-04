import {Injectable, Pipe} from '@angular/core';
import {TodoModel} from "../shared/todo-model";

@Pipe({
    name: 'prior'
})
@Injectable()
export class Prior {
    transform(todos: TodoModel[]): any {
        return todos.filter(todo => !todo.isDone).sort((a, b) => b.isImportant && !a.isImportant ? 1 : -1);
    }
}

