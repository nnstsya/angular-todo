import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TodoModel } from '../models/todo.model';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AppService],
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    FormsModule,
    TodoItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  inputMode: boolean = false;
  todos: TodoModel[] = [];
  filterMode: boolean = false;
  displayedTodos: TodoModel[] = [];
  inputValue: string = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  activateInputMode(): void {
    this.inputMode = true;
  }

  activateFilterMode(): void {
    this.filterMode = true;
  }

  handleSubmit(): void {
    const trimmedValue = this.inputValue.trim();

    if (trimmedValue !== '') {
      this.appService.addTodo(trimmedValue);
    }

    this.inputMode = !this.inputMode;
    this.inputValue = '';
    this.displayedTodos = this.todos;
  }

  toggleCheck(id: number): void {
    this.appService.toggleCheckTodo(id);
    this.displayedTodos = this.todos;
  }

  removeTodo(id: number): void {
    this.appService.removeTodo(id);
    this.displayedTodos = this.todos;
  }

  showAllTodos(): void {
    this.displayedTodos = this.todos;
    this.filterMode = false;
  }

  showDoneTodos(): void {
    this.displayedTodos = this.todos.filter((todo) => todo.isChecked !== false);
    this.filterMode = false;
  }

  showUnDoneTodos(): void {
    this.displayedTodos = this.todos.filter((todo) => todo.isChecked === false);
    this.filterMode = false;
  }
}
