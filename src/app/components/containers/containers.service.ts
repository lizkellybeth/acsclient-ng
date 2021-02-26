import { IContainer } from './icontainer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor(private http: HttpClient) { }

  fetchContainers(): Promise<IContainer[]> {
    return this.http.get<IContainer[]>(Constants.rootUrl + "/display-tmcdb-containers").toPromise();
  }



}
