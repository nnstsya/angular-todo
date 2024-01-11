import { BehaviorSubject, Observable } from 'rxjs';
import { TodoModel } from '../models/todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private todos: BehaviorSubject<TodoModel[]> = new BehaviorSubject<
    TodoModel[]
  >([]);

  getTodos(): Observable<TodoModel[]> {
    return this.todos.asObservable();
  }

  addTodo(newTask: string): void {
    const newTodo: TodoModel = {
      id: Date.now(),
      task: newTask,
      isChecked: false,
    };
    const updatedTodos: TodoModel[] = [...this.todos.value, newTodo];
    this.todos.next(updatedTodos);
  }

  removeTodo(idOfTaskToRemove: number): void {
    const updatedTodos: TodoModel[] = this.todos.value.filter(
      (todo) => todo.id !== idOfTaskToRemove,
    );
    this.todos.next(updatedTodos);
  }

  toggleCheckTodo(idOfTaskToCheck: number): void {
    const todosArray = this.todos.value;
    const todo = todosArray.find(
      (todo: TodoModel) => todo.id === idOfTaskToCheck,
    );

    todo && (todo.isChecked = !todo.isChecked);
    this.todos.next([...todosArray]);
  }
}
