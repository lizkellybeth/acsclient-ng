import { SubsystemWrapper } from './../components/subsystems/isubsystem';
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




}
