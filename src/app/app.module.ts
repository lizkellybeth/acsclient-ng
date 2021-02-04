import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AcsStatusComponent } from './components/acs-status/acs-status.component';
import { AcsStatusService } from './services/acs-status.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AcsStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [AcsStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
