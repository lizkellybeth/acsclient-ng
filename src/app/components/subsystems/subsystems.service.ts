import { SubsystemWrapper } from './isubsystem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class SubsystemsService {

  constructor(private http: HttpClient) { }

  fetchSubsystems(): Promise<SubsystemWrapper[]> {
    return this.http.get<SubsystemWrapper[]>(Constants.rootUrl + "/display-subsystems").toPromise();
  }

  startSubsystems(subsystems: SubsystemWrapper[]): Promise<string> {
    var querystring = "?subsystems=";
    subsystems.forEach((subsystem) => {
      querystring += subsystem.name + "~";
    });
    console.log("querystring: " + querystring);
    return this.http.get<string>(Constants.rootUrl + "/start-subsystems" + querystring).toPromise();
  }

  stopSubsystems(subsystems: SubsystemWrapper[]) { 
    var querystring = "?subsystems=";
    subsystems.forEach((subsystem) => {
      querystring += subsystem.name + "~";
    });
    console.log("querystring: " + querystring);
    return this.http.get<string>(Constants.rootUrl + "/stop-subsystems" + querystring).toPromise();
  }

}
