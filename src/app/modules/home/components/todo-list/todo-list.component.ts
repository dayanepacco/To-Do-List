import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

    

  constructor() { }

  ngDoCheck() {

    this.setLocalStorage();
   
  }

  //add item
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
  //deletar cada item
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }
  //deletar todos itens da lista de uma vez
  public deleteAllTaskList() {
    //janela de aviso se quer mesmo deletar
    const confirm = window.confirm("você deseja realmente deletar tudo?");
    //se sim apagar tudo
    if (confirm) {
      this.taskList = [];
    }
  }
  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja Deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
    }

  public setLocalStorage(){
    if(this.taskList){         //se tiver algum valor add aqui dentro
      //os checados vão para baixo e os não checados para cima
     this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    //para guardar no localstorage os dados e convertendo em string
     localStorage.setItem("list", JSON.stringify(this.taskList));
   }
  }
}

