import { Component, OnInit } from '@angular/core';
import { TmcdbService } from 'src/app/services/tmcdb.service';

@Component({
  selector: 'app-tmcdb',
  templateUrl: './tmcdb.component.html',
  styleUrls: ['./tmcdb.component.css']
})
export class TmcdbComponent implements OnInit {

  tmcdbJson = "";

  constructor(public service: TmcdbService) { }

  ngOnInit(): void {
    this.fetchTmcdbConfig();
  }

  fetchTmcdbConfig() {
    this.service.fetchTmcdbConfig()
      .then(res => {
      this.tmcdbJson = res;//JSON.stringify(res);
      console.log("fetched tmcdbJson: " + this.tmcdbJson);

      })
      .catch(err => {
        console.error(err);
      });
  }
  private _title = "Tmcdb Config Component";
  public get title() {
    return this._title;
  }


}
