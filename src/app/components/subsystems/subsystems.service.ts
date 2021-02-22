import { SubsystemWrapper } from './isubsystem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubsystemsService {

  constructor(private http: HttpClient) { }

  readonly rootUrl = "http://rubyps:10021/acsclient";

  fetchSubsystems(): Promise<SubsystemWrapper[]> {
    return this.http.get<SubsystemWrapper[]>(this.rootUrl + "/display-subsystems").toPromise();
  }

  fetchMockSubsystems(): SubsystemWrapper[] {
    const data =  [{"name":"SCHEDULING","clazz":"alma.exec.Subsystem","components":[],"masterComponent":{"MasterComponentWrapper":{"name":"SCHEDULING_MASTER_COMP","clazz":"alma.exec.Master"}}},{"name":"CONTROL","clazz":"alma.exec.Subsystem","components":[],"masterComponent":{"MasterComponentWrapper":{"name":"CONTROL_MASTER_COMP","clazz":"alma.exec.Master"}}}];
    return data as SubsystemWrapper[];
  }



}
