import { ComponentWrapper } from './icomponent';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

   constructor(private http: HttpClient) { }

  searchComponents(query:string): Promise<ComponentWrapper[]> {
    return this.http.get<ComponentWrapper[]>(Constants.rootUrl + "/search-components?query=" + query + "*").toPromise();
  }

  
}
