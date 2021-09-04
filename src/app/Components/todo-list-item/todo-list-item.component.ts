import { EventEmitter } from '@angular/core';
import { Component, OnInit,Input,Output} from '@angular/core';
import { TODO, todoDefaultValue } from 'src/app/Interfaces/todo.interface';
import { TodoosService } from 'src/app/services/todoos.service';



@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  constructor(private todoosService:TodoosService) { }
 @Input() todo:TODO=todoDefaultValue;
//  @Output() todoClick = new EventEmitter();
  ngOnInit(): void {
  }
 onClick(){
  
  this.todoosService.deleteTodo(this.todo.id)
 }
}
