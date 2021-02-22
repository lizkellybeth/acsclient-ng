import { SubsystemsService } from './subsystems.service';
import { Component, OnInit } from '@angular/core';
import { SubsystemWrapper } from './isubsystem';

@Component({
  selector: 'app-subsystems',
  templateUrl: './subsystems.component.html',
  styleUrls: ['./subsystems.component.css']
})
export class SubsystemsComponent implements OnInit {

  subsystems: SubsystemWrapper[] = [];

  constructor(public service: SubsystemsService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    //this.fetchSubsystems();    
    this.fetchMockSubsystems()
  }

  fetchSubsystems() {
    this.service.fetchSubsystems()
      .then(res => {
        console.log("fetched result[]: " + JSON.stringify(res));
        let subsystems: SubsystemWrapper[] = res;
        this.subsystems = subsystems;//JSON.stringify(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  fetchMockSubsystems() {
    console.log("MOCK SUBSYSTEMS OUTPUT!");
    const res = this.service.fetchMockSubsystems();
    this.subsystems = res;//JSON.stringify(res);  
  }

  private _title = "Subsystems";
  public get title() {
    return this._title;
  }


}


