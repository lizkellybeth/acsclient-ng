import { element } from 'protractor';
import { ComponentsService } from './components.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../tasks/itasks';
import { ComponentWrapper } from './icomponent';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  components: ComponentWrapper[] = [];
  xpandStatus=false;

  constructor(private service:ComponentsService) { }

  ngOnInit(): void {
    this.search("CONTROL");
  }

  search(query:string){
    return this.searchComponents(query);
  }

  searchComponents(query:string) {
    this.service.searchComponents(query)
    .then(res => {
      //console.log("fetched tasks: " + JSON.stringify(res) ); 
      let obj: ComponentWrapper[] = res;
      this.components = obj;//JSON.stringify(res);
    })
    .catch(err => {
      console.error(err);
    });
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
