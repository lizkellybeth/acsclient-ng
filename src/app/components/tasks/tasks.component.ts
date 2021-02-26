import { TasksService } from './tasks.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from './itasks';
import { Constants } from 'src/app/constants';

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
    this.fetchTasks();
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


private _title = "Tasks";
  public get title() {
    return this._title;
  }

}
