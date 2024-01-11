import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TodoModel } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['../../app.component.scss', './todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todos!: TodoModel[];
  @Input() todo!: TodoModel;

  @Output() toggleCheckEvent = new EventEmitter<number>();
  @Output() removeTodoEvent = new EventEmitter<number>();

  inputValue: string = '';

  toggleCheck(id: number): void {
    this.toggleCheckEvent.emit(this.todo.id);
  }

  deleteTask(id: number): void {
    this.removeTodoEvent.emit(this.todo.id);
  }
}
