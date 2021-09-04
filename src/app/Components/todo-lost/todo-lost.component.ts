import { Component, OnInit } from '@angular/core';
import { TodoosService } from 'src/app/services/todoos.service';

@Component({
  selector: 'app-todo-lost',
  templateUrl: './todo-lost.component.html',
  styleUrls: ['./todo-lost.component.scss']
})
export class TodoLostComponent implements OnInit {

  constructor(private todoosService:TodoosService) { }

  ngOnInit(): void {
  }
  get todoos(){
    return this.todoosService.todoos
  }
  // deleteTodo(e:string){
  //   this.todoos.splice(this.todoos.indexOf(e),1)
  // }
}
