import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];

  subscription = new Subscription();

  constructor(private http: HttpClient,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos$().subscribe(todos => console.log(todos));
    this.todoService.getTodos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  markAllTodosAsCompleted(): void {
    this.todos = this.todos.map(t => ({ title: t.title, isCompleted: true }))
  }

  handleStateChange(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
  }

  filterByName(event: Event) {
    console.log('Filter was updated');
    this.subscription.add(
      this.todoService.getTodos$()
        .pipe()
        .subscribe(todos => console.log(todos))
    );
  }
}
