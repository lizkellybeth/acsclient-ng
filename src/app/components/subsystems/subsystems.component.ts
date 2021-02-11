import { SubsystemsService } from './subsystems.service';
import { Component, OnInit } from '@angular/core';
import { SubsystemWrapper, ComponentWrapper } from './isubsystem';

@Component({
  selector: 'app-subsystems',
  templateUrl: './subsystems.component.html',
  styleUrls: ['./subsystems.component.css']
})
export class SubsystemsComponent implements OnInit {

  subsystems: SubsystemWrapper[] = [];

  constructor(public service: SubsystemsService) { }

  ngOnInit(): void {
    //this.fetchStatus();
    this.fetchSubsystems();
  }

  fetchSubsystems() {
    this.service.fetchSubsystems()
    .then(res => {
      console.log("fetched result[]: " + JSON.stringify(res) );
      let subsystems: SubsystemWrapper[] = res;
      let subsystem: SubsystemWrapper = subsystems[1];
      let master: ComponentWrapper = subsystem["master"];
      console.log("HERES A subname: " + subsystem.name);
      console.log("HERES A mastername: " + master.name);

      this.subsystems = subsystems;//JSON.stringify(res);
     })
    .catch(err => {
      console.error(err);
    });
}

  private _title = "ACS Subsystems Component";
  public get title() {
    return this._title;
  }

  
  }


