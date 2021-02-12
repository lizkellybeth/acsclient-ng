import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AcsStatusComponent } from './components/acs-status/acs-status.component';
import { AcsStatusService } from './components/acs-status/acs-status.service';
import { ContainersComponent } from './components/containers/containers.component';
import { SubsystemsComponent } from './components/subsystems/subsystems.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule} from '@angular/material/expansion'

@NgModule({
  declarations: [
    AppComponent,
    AcsStatusComponent,
    ContainersComponent,
    SubsystemsComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule
  ],
  providers: [AcsStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
