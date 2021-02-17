import { AcsStatusComponent } from './components/acs-status/acs-status.component';
import { element } from 'protractor';
import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, ViewRef, ViewContainerRef, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { AcsStatusService } from './components/acs-status/acs-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit{
  title = 'acsclient-ng';

  @ViewChild('mainDiv')
  mainDiv?: ElementRef;


  @ViewChild('divLeft')
  divLeft?: ElementRef;

  @ViewChild('divRight')
  divRight?: ElementRef;

  @ViewChild('menuDiv')
  menuDiv?: ElementRef;

  @ViewChild('mainDiv', {read: ViewContainerRef}) container?: ViewContainerRef;
  components:ComponentRef<any>[] = [];
  acsstatusClass = AcsStatusComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
  } 

  addComponent(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = this.container?.createComponent(componentFactory);

    // Push the component so that we can keep track of which components are created
    if (component){
    this.components.push(component);
    }
  }

  ngAfterInit(): void {
    this.addComponent(this.acsstatusClass);  
  }

  ngAfterViewInit(){
    
    console.log("HEEEEEY " );
    //this.renderer.removeChild(this.mainDiv?.nativeElement, this.menuDiv?.nativeElement);
    this.addComponent(this.acsstatusClass);  
  }

  
}
