import { IContainer } from './icontainer';
import { Component, OnInit } from '@angular/core';
import { TmcdbService } from 'src/app/components/tmcdb/tmcdb.service';

@Component({
  selector: 'app-tmcdb',
  templateUrl: './tmcdb.component.html',
  styleUrls: ['./tmcdb.component.css']
})
export class TmcdbComponent implements OnInit {

  containers: IContainer[] = [];

  constructor(public service: TmcdbService) { }

  ngOnInit(): void {
    this.fetchTmcdbConfig();
  }

  fetchTmcdbConfig() {
    this.service.fetchTmcdbConfig()
    .then(res => {
      //console.log("fetched result[]: " + JSON.stringify(res) );
      let obj: IContainer[] = res;
      /*
      console.log("HERES A field: " + obj[0].containerId);
      console.log("HERES A field: " + obj[0].computer);
      console.log("HERES A field: " + obj[0].containerName);
      console.log("HERES A field: " + obj[0].path);
      console.log("HERES A field: " + obj[0].implLang);
      */
      this.containers = obj;//JSON.stringify(res);
    })
    .catch(err => {
      console.error(err);
    });
  }
  private _title = "Tmcdb Config Containers";
  public get title() {
    return this._title;
  }


}
