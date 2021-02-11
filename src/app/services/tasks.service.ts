import { ITask } from './../components/tasks/itasks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }

  readonly rootUrl = "http://rubyps:10021/acsclient";

  fetchTasks(): Promise<ITask[]> {
    return this.http.get<ITask[]>(this.rootUrl + "/display-tasks").toPromise();
     
  }
}
