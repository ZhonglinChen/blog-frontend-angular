import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Todo } from '../_models/Todo';
import { TodoService } from '../_services/todo.service';
import { Observable } from 'rxjs';

export class TodolistResolver implements Resolve<Todo[]> {

    constructor(private todoService: TodoService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Todo[] | Observable<Todo[]> | Promise<Todo[]> {
       return this.todoService.getAllTodos();
    }

}
