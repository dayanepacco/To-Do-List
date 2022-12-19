
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  //ele vai emitir para os outros compoenentes sempre que tiver um event/emit
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  //para add itens
  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();  //trim remove espaço de frente e de trás
    
    if(this.addItemTaskList){             //se nao tiver vazio 
    this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = "";
    }
  }

}
