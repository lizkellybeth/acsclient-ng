import { SubsystemsService } from '../../services/subsystems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subsystems',
  templateUrl: './subsystems.component.html',
  styleUrls: ['./subsystems.component.css']
})
export class SubsystemsComponent implements OnInit {

  subsystems = "";

  constructor(public service: SubsystemsService) { }

  ngOnInit(): void {
    //this.fetchStatus();
    this.fetchSubsystems();
  }

  fetchSubsystems() {
    this.service.fetchSubsystems()
    .then(res => {
      console.log("fetched result[]: " + JSON.stringify(res) );
      this.subsystems = res;
    })
    .catch(err => {
      console.error(err);
    });
}
  private _title = "ACS Subsystems Component";
  public get title() {
    return this._title;
  }

  
  public getSubsystems(): string {
    return this.subsystems;
  }

  }


