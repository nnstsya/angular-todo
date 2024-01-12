import { AppComponent } from './pages/main/app.component';
import { TodoItemComponent } from './pages/main/components/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppService } from '../services/app.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    MatIconModule,
    FormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
