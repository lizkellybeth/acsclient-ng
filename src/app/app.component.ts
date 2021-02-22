import { TasksComponent } from './components/tasks/tasks.component';
import { SubsystemsComponent } from './components/subsystems/subsystems.component';
import { SubsystemsService } from './components/subsystems/subsystems.service';
import { ContainersComponent } from './components/containers/containers.component';
import { AcsStatusComponent } from './components/acs-status/acs-status.component';
import { element } from 'protractor';
import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, ViewRef, ViewContainerRef, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { AcsStatusService } from './components/acs-status/acs-status.service';
import { ComponentsComponent } from './components/components/components.component';
//import { moveDown } from '../main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {
  title = 'acsclient-ng';


  @ViewChild('mainDiv', { read: ViewContainerRef }) mainDiv!: ViewContainerRef;
  @ViewChild('menuDiv', { read: ViewContainerRef }) menuDiv!: ViewContainerRef;
  @ViewChild('divLeft', { read: ViewContainerRef }) divLeft!: ViewContainerRef;
  @ViewChild('divRight', { read: ViewContainerRef }) divRight!: ViewContainerRef;


  components: ComponentRef<any>[] = [];
  acsstatusClass = AcsStatusComponent;
  containersClass = ContainersComponent;
  subsystemsClass = SubsystemsComponent;
  tasksClass = TasksComponent;
  componentsClass = ComponentsComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  addComponent(componentClass: Type<any>, container: ViewContainerRef) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = container?.createComponent(componentFactory);

    // Push the component so that we can keep track of which components are created
    if (component) {
      this.components.push(component);
    }
  }



  ngAfterViewInit() {
    setTimeout(() => {
      console.log("ngAfterViewInit ");
      //this.renderer.removeChild(this.mainDiv?.nativeElement, this.menuDiv?.nativeElement);
      this.addComponent(this.acsstatusClass, this.divLeft);
      this.addComponent(this.containersClass, this.divRight);
      this.addComponent(this.subsystemsClass, this.divRight);
      this.addComponent(this.tasksClass, this.divRight);
      this.addComponent(this.componentsClass, this.divLeft);
      this.moveDown(this.components[1], this.divRight);
    }, 0)
  }

  //getComponentRefByName(name:string): <ComponentRef<any> | void>{
   
  //}

  //getViewContainerRefByName(name:string): ViewContainerRef {

  //}


  moveUp(componentRef: ComponentRef<any>, container: ViewContainerRef){
    this.move(componentRef, container, -1);
  }

  moveDown(componentRef: ComponentRef<any>, container: ViewContainerRef){
    this.move(componentRef, container, +1);
  }

  move(componentRef: ComponentRef<any>, container: ViewContainerRef, shift: number) {
    const currentIndex = container.indexOf(componentRef.hostView);
    const len = container.length;
  
    let destinationIndex = currentIndex -1;
    if (destinationIndex === len) {
      destinationIndex = 0;
    }
    if (destinationIndex === -1) {
      destinationIndex = len - 1;
    }
    container.move(componentRef.hostView, destinationIndex);
  }
ngAfterInit(): void {
    console.log("ngAfterInit ");
  }

  ngOnInit() {
    console.log("ngOnInit ");

  }


}
