import { SubsystemsService } from '../../services/subsystems.service';
import { Component, OnInit } from '@angular/core';
import { ISubsystem } from './isubsystem';

@Component({
  selector: 'app-subsystems',
  templateUrl: './subsystems.component.html',
  styleUrls: ['./subsystems.component.css']
})
export class SubsystemsComponent implements OnInit {

  subsystems: ISubsystem[] = [];

  constructor(public service: SubsystemsService) { }

  ngOnInit(): void {
    //this.fetchStatus();
    this.fetchSubsystems();
  }

  fetchSubsystems() {
    this.service.fetchSubsystems()
    .then(res => {
      console.log("fetched result[]: " + JSON.stringify(res) );
      let obj: ISubsystem[] = res;
      console.log("HERES A field: " + obj[0].name);
      console.log("HERES A field: " + obj[0].masterComponent);
      console.log("HERES A field: " + obj[0].components);
      this.subsystems = obj;//JSON.stringify(res);
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


