import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from '../../../../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../../app.component.scss', './todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todos!: TodoModel[];
  @Input() todo!: TodoModel;

  @Output() toggleCheckEvent = new EventEmitter<number>();
  @Output() removeTodoEvent = new EventEmitter<number>();

  inputValue: string = '';

  toggleCheck(): void {
    this.toggleCheckEvent.emit(this.todo.id);
  }

  deleteTask(): void {
    this.removeTodoEvent.emit(this.todo.id);
  }
}
