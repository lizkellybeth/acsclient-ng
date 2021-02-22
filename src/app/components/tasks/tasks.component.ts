import { TasksService } from './tasks.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from './itasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: ITask[] = [];

  constructor(public service: TasksService) { }

  ngOnInit(): void {
    this.fetch(); 
  }

  fetch(){
    //this.fetchTasks();
    this.fetchMockTasks();
  }

  refreshTasks(){
    console.log("Refresh Tasks");
    this.fetch();
  }

  fetchTasks() {
    this.service.fetchTasks()
    .then(res => {
      //console.log("fetched tasks: " + JSON.stringify(res) ); 
      let obj: ITask[] = res;
      this.tasks = obj;//JSON.stringify(res);
    })
    .catch(err => {
      console.error(err);
    });
}

fetchMockTasks() {
  console.log("MOCK TASKS OUTPUT!");
  const res = this.service.fetchMockTasks();
  this.tasks = res;//JSON.stringify(res);  
}

private _title = "Tasks";
  public get title() {
    return this._title;
  }

}
