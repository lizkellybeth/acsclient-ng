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

  fetchMockTasks(): ITask[]{
    const data = [{"name":"SearchComponentsTask","complete":true,"id":752197674,"startTime":1614016189915,"parameters":"query: SCHEDUL**; ","exception":null,"hasResult":true},{"name":"ContainerListTask","complete":true,"id":292271759,"startTime":1614016187248,"parameters":"","exception":null,"hasResult":true},{"name":"SearchComponentsTask","complete":true,"id":570019977,"startTime":1614016187245,"parameters":"query: CONTROL**; ","exception":null,"hasResult":true},{"name":"SubsystemListTask","complete":true,"id":1690378213,"startTime":1614016187236,"parameters":"","exception":null,"hasResult":true},{"name":"AcsStatusTask","complete":true,"id":69076121,"startTime":1614016187224,"parameters":"","exception":null,"hasResult":true},{"name":"StartComponentTask","complete":true,"id":948219614,"startTime":1613807893072,"parameters":"name: CONTROL/DA47/lkmLoader; ","exception":"CONTROL/DA47/lkmLoader","hasResult":true},{"name":"StartComponentTask","complete":true,"id":849918579,"startTime":1613807841025,"parameters":"name: CONTROL/DA47/lkmLoader; ","exception":"CONTROL/DA47/lkmLoader","hasResult":true},{"name":"StartComponentTask","complete":true,"id":64642995,"startTime":1613807787037,"parameters":"name: CONTROL/DA47/lkmLoader; ","exception":"CONTROL/DA47/lkmLoader","hasResult":true}];
    return data as ITask[];
  }
}
