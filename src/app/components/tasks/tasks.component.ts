import { TasksService } from '../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = "";

  constructor(public service: TasksService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.service.fetchTasks()
    .then(res => {
      console.log("fetched result[]: " + JSON.stringify(res) );
      this.tasks = res;
    })
    .catch(err => {
      console.error(err);
    });
}

  private _title = "Tasks Component";
  public get title() {
    return this._title;
  }

  public getTasks(): string {
    return this.tasks;
  }

}
