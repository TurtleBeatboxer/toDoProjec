import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: Array<Task> = [
    {name : "Naprawić rower", isCompleted : false},
    {name : "Odrobić zadanie z matematyki", isCompleted : false},
    {name : "Wyprowadzić psa", isCompleted: true}
  ]

  public inputValue: string;
 
  constructor() { }

  ngOnInit(): void {
    this.inputValue = "";
  }

  public handleClick(): void {
    if(this.inputValue != "") {
    this.list.push({
      name: this.inputValue,
      isCompleted: false
    })
    
  }
}

  public remove(task: Task){
    const index  = this.list.indexOf(task);
    this.list.splice(index, 1);
  }

  public markAsCompleted(task: Task){
    alert('Oznaczono zadanie jako wykonane');
    task.isCompleted = true;
  }

  public onKeyDownEvent(event: KeyboardEvent){
      if(event.keyCode === 13)
      this.handleClick();
  }
  public DeleteAll(){
      this.list.splice(0, this.list.length);
    }
  
  public DeleteAllCompleted(){
    for (let task of this.list){
      if (task.isCompleted === true){
        this.remove(task);
      }
    }
  }
}
