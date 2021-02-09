import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubsystemsService {

  constructor(private http: HttpClient) { }

  readonly rootUrl = "http://rubyps:10021/acsclient";

  fetchSubsystems(): Promise<any> {
    return this.http.jsonp(this.rootUrl + "/display-subsystems", 'callback').toPromise();
  }




}
