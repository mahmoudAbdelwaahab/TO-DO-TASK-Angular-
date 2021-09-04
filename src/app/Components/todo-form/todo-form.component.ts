import { Component, OnInit } from '@angular/core';
import { TodoosService } from 'src/app/services/todoos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService:TodoosService) { }

  ngOnInit(): void {
  }
todoText:string='';

addTodo(){
  this.todoService.createTodo(this.todoText)
  this.todoText='';
}
}
