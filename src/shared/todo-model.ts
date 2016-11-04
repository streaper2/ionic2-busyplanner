export class TodoModel {
    constructor(public description: string,
                public listId: number,
                public isImportant: boolean = false,
                public isDone: boolean = false,
                public id: number = 0
                ) {
    }

    static clone(todo: TodoModel) {
        return new TodoModel(
            todo.description, 
            todo.listId, 
            todo.isImportant, 
            todo.isDone, 
            todo.id
            )
    }
}