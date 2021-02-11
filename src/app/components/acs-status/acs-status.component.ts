import { element } from 'protractor';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AcsStatusService } from './acs-status.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IStatus } from './istatus';

@Component({
  selector: 'app-acs-status',
  templateUrl: './acs-status.component.html',
  styleUrls: ['./acs-status.component.css']
})
export class AcsStatusComponent implements OnInit {

  public status: any= "foo";

  constructor(public service: AcsStatusService) { }

  ngOnInit(): void {
    this.fetchStatus();
    //this.fetchMockStatus();
  }

  fetchStatus() {
    this.service.fetchAcsStatus()
      .then(res => {
        //console.log("fetched result: " + (res ));
        this.status = res;
      })
      .catch(err => {
        console.error(err);
      });
  }
  private _title = "ACS Status Component";
  public get title() {
    return this._title;
  }

  fetchMockStatus(){
    this.status = this.service.fetchMockStatus();
  }

  public getStatus(): string {
    return this.status;
  }



}
