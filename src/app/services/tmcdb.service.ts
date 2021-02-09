import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmcdbService {

  readonly rootUrl = "http://rubyps:10021/acsclient";

  constructor(private http: HttpClient) { }

  fetchTmcdbConfig(): Promise<any> {
    return this.http.jsonp(this.rootUrl + "/display-tmcdb-containers", 'callback').toPromise();
  }


}
