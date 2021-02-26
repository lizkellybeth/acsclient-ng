import { IStatus } from './istatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';
import { HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AcsStatusService {

  constructor(private http: HttpClient) {}

  fetchAcsStatus(): Promise<any> {
   // return this.http.jsonp(this.rootUrl + "/acs-status", 'callback').toPromise();
    return this.http.get(Constants.rootUrl + "/acs-status").toPromise();
  }

  startAcs(): Promise<any> {
    // return this.http.jsonp(this.rootUrl + "/acs-status", 'callback').toPromise();
     return this.http.get(Constants.rootUrl + "/acs-start").toPromise();
  }
 
  stopAcs(): Promise<any> {
    // return this.http.jsonp(this.rootUrl + "/acs-status", 'callback').toPromise();
     return this.http.get(Constants.rootUrl + "/acs-stop").toPromise();
  }

}