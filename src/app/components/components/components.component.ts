import { element } from 'protractor';
import { ComponentsService } from './components.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../tasks/itasks';
import { IComponent } from './icomponent';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  components: IComponent[] = [];
  xpandStatus=false;

  constructor(private service:ComponentsService) { }

  ngOnInit(): void {
    this.search("CONTROL");
  }

  search(query:string){
    //return this.searchComponents(query);
    return this.searchMockComponents(query);
  }

  searchComponents(query:string) {
    this.service.searchComponents(query)
    .then(res => {
      //console.log("fetched tasks: " + JSON.stringify(res) ); 
      let obj: IComponent[] = res;
      this.components = obj;//JSON.stringify(res);
    })
    .catch(err => {
      console.error(err);
    });
  }

  searchMockComponents(query:string) {
    console.log("MOCK COMPONENTS OUTPUT!");
    const res = this.service.searchMockComponents();
    this.components = res;//JSON.stringify(res);
  }

  xpand(){
    console.log("EXPAND!!");
    this.xpandStatus=true;
    return true;
  }
  
    private _title = "Components";
  public get title() {
    return this._title;
  }
}
