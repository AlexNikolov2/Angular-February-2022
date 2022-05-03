import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';


export interface Todo {
  title: string;
  isCompleted: boolean;
}
@Injectable()
class LocalService {
    count: number = 0;

    constructor() {
      console.log('LocalService');
    }
}
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  count: number = 0;

  @Input() todo!: Todo;

  @Output() completeStateChange: EventEmitter<Todo> = new EventEmitter();

  constructor(private localService: LocalService) { 
  }

  ngOnInit(): void {
  }

  handleCompleteStateChange(todoToChange: Todo): void {
    console.log(this.localService.count++);
    this.completeStateChange.emit(todoToChange);
  }
}
