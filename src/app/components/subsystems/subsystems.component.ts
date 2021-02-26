import { element } from 'protractor';
import { SubsystemsService } from './subsystems.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { SubsystemWrapper } from './isubsystem';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-subsystems',
  templateUrl: './subsystems.component.html',
  styleUrls: ['./subsystems.component.css']
})
export class SubsystemsComponent implements OnInit {

  subsystems: SubsystemWrapper[] = [];
  msg: string = "";

  constructor(public service: SubsystemsService) { }

  ngOnInit(): void {
    this.fetch();
  }

  checkSubsystem(event: any, subsystem: SubsystemWrapper) {
    console.log(event.target.checked + ": " + subsystem.name);
    const checked = event.target.checked;
    subsystem.selected = checked;
  }

  startSubsystems() {
    console.log("startSubsystem()----");
    var subs:SubsystemWrapper[]  = [];
    this.subsystems.forEach( (sub)  => {
      if (sub.selected){
        subs.push(sub);
      }
    });
    this.service.startSubsystems(subs)
      .then(res => {
        console.log("startSubsystems result: " + (res));
      })
      .catch(err => {
        this.msg = err;
        console.error(this.msg);
      });

  }

  stopSubsystems() {
    console.log("----stopSubsystem()");
    var subs:SubsystemWrapper[]  = [];
    this.subsystems.forEach( (sub)  => {
      if (sub.selected){
        subs.push(sub);
      }
    });
    this.service.stopSubsystems(subs)
      .then(res => {
        console.log("stopSubsystems result: " + (res));
      })
      .catch(err => {
        this.msg = err;
        console.error(this.msg);
      });
  }

  fetch() {
    if (Constants.useMockData) {
      this.fetchMockSubsystems()
    } else {
      this.fetchSubsystems();
    }
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


