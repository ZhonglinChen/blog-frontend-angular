import { ITodo } from './ITodo';

export class Todo implements ITodo {




    constructor(public id: number = 0, public title: string = '', public completed: boolean =false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    set(todo: Todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.completed = todo.completed;
    }

}
