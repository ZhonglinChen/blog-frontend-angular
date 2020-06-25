import { Injectable } from '@angular/core';
import { Todo } from '../_models/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Todo[] = [new Todo(1, 'test todo1',  false)
    , new Todo( 2, 'test todo2', false )
    ,  new Todo( 3, 'test todo3', false )];


  constructor() { }



  getTodoById() {

    return this.todoList[0];
  }

  getAllTodos(): Todo[] {


    return this.todoList;

  }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
  }

  deleteTodoById(id: number) {
    this.todoList.splice(this.todoList.findIndex(todo => todo.id === id), 1);
  }

  updateTodoBy(todo: Todo) {
    this.todoList.find(t => t.id === todo.id).set(todo);
  }
  toggleTodoComplete(todo:Todo) {
    todo.completed=!todo.completed;
  }

}
