import { ISubsystem } from './../components/subsystems/isubsystem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubsystemsService {

  constructor(private http: HttpClient) { }

  readonly rootUrl = "http://rubyps:10021/acsclient";

  fetchSubsystems(): Promise<ISubsystem[]> {
    return this.http.get<ISubsystem[]>(this.rootUrl + "/display-subsystems").toPromise();
     
  }




}
