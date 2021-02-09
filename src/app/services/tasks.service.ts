import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }

  readonly rootUrl = "http://rubyps:10021/acsclient";

  fetchTasks(): Promise<any> {
    return this.http.jsonp(this.rootUrl + "/display-tasks", 'callback').toPromise();
  }
}
