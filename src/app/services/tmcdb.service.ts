import { IContainer } from './../components/tmcdb/icontainer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmcdbService {

  readonly rootUrl = "http://rubyps:10021/acsclient";

  constructor(private http: HttpClient) { }

  fetchTmcdbConfig(): Promise<IContainer[]> {
    return this.http.get<IContainer[]>(this.rootUrl + "/display-tmcdb-containers").toPromise();
  }


}
