import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO } from '../Interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoosService {

  constructor(private Http:HttpClient) { }
  todoos:TODO[]=[]
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 3,
  //     "title": "fugiat veniam minus",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 4,
  //     "title": "et porro tempora",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 5,
  //     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //     "completed": false
  //   },

  // ]
 
  createTodo(title:string){
    const todo:TODO={
      userId:1,
      id:this.todoos.length+1,
      title:title,
      completed:false
    }
    this.todoos.push(todo)
  }
  deleteTodo(todooId:number){
    // this.todoos.splice(this.todoos.indexOf(todoo),1)
    const todoIndex=this.todoos.findIndex(t=>t.id==todooId)
    if(!todoIndex) return
    this.todoos.slice(todoIndex,1)
  }
}
