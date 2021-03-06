import { MatSort } from '@angular/material/sort';
import { IContainer } from './icontainer';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainersService } from 'src/app/components/containers/containers.service';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  containers: IContainer[] = [];
  
  constructor(public service: ContainersService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(){
    this.fetchContainers();
  }

  fetchContainers() {
    this.service.fetchContainers()
    .then(res => {
      //console.log("fetchTmcdbConfig fetched result[]: " + JSON.stringify(res) );
      let obj: IContainer[] = res;
      this.containers = obj;//JSON.stringify(res);
    })
    .catch(err => {
      console.error(err);
    });
  }
  private _title = "Containers";
  public get title() {
    return this._title;
  }


}
