import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: "Minha novfa Task", checked: true },
    { task: "Minha novfa Task 2", checked: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }
    
 //add item
  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false});

  }
   //deletar cada item
  public deleteItemTaskList(event: number) {    
    this.taskList.splice(event, 1);
  }

  //deletar todos itens da lista de uma vez
  public deleteAllTaskList(){
  //janela de aviso se quer mesmo deletar
  const confirm = window.confirm("você deseja realmente deletar tudo?");

  //se sim apagar tudo
    if(confirm){
    this.taskList = [];
  }
}
}
