import { ITask } from './itasks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }

  fetchTasks(): Promise<ITask[]> {
    return this.http.get<ITask[]>(Constants.rootUrl + "/display-tasks").toPromise(); 
  }

}
