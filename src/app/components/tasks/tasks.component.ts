import { TasksService } from '../../services/tasks.service';
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
    this.fetchTasks();
  }

  fetchTasks() {
    this.service.fetchTasks()
    .then(res => {
      //console.log("fetched result[]: " + JSON.stringify(res) );
      let obj: ITask[] = res;
      /*
      console.log("HERES A field: " + obj[0].name);
      console.log("HERES A field: " + obj[0].parameters);
      console.log("HERES A field: " + obj[0].id);
      console.log("HERES A field: " + obj[0].complete);
      */
      this.tasks = obj;//JSON.stringify(res);
    })
    .catch(err => {
      console.error(err);
    });
}

  private _title = "Tasks Component";
  public get title() {
    return this._title;
  }

}
