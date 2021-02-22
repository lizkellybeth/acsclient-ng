import { IStatus } from './istatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';
import { HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AcsStatusService {

  constructor(private http: HttpClient) {}

  fetchAcsStatus(): Promise<any> {
   // return this.http.jsonp(this.rootUrl + "/acs-status", 'callback').toPromise();
    return this.http.get(Constants.rootUrl + "/acs-status").toPromise();
  }

  startAcs(): Promise<any> {
    // return this.http.jsonp(this.rootUrl + "/acs-status", 'callback').toPromise();
     return this.http.get(Constants.rootUrl + "/acs-start").toPromise();
  }
 
  stopAcs(): Promise<any> {
    // return this.http.jsonp(this.rootUrl + "/acs-status", 'callback').toPromise();
     return this.http.get(Constants.rootUrl + "/acs-stop").toPromise();
  }
 
  fetchMockStatus(){
    return `
    Status for ACS instance: 0
    ------------------------------------------------------------------------
    Manager process ID is: 17261
    Naming service process ID is: 4398
    Notify service process ID is: 7776
    Logging service process ID is: 15575
    IFR process ID is: 12386
    Logging notify service process ID is: 15144
    Archive notify service process ID is: 6586
    Alarm notify service process ID is: 14716
    ACS Log Service process ID is: 16700
    ACS CDB process ID is: 9486
    ACS Alarm Service process ID is: 18570
    
    Emitting information about all known local and remote containers:
    The ARCHIVE/ACC/cppTotalPowerContainer container is running on 127.0.0.1 using the TCP port: 4000
    The ACC/masterContainer container is running on 127.0.0.1 using the TCP port: 4002
    
    Emitting information about all known local and remote notify services:
    The AcaNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Aca notify service is running on 127.0.0.1 using the TCP port: 3021
    The CorrNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Corr notify service is running on 127.0.0.1 using the TCP port: 3023
    The ControlSystemNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The ControlSystem notify service is running on 127.0.0.1 using the TCP port: 3025
    The TelcalNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Telcal notify service is running on 127.0.0.1 using the TCP port: 3027
    The NotifyEventChannelFactoryPM notify service is running on 127.0.0.1 using the TCP port: 3028
    The DcNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Dc notify service is running on 127.0.0.1 using the TCP port: 3030
    The NotifyEventChannelFactoryDA notify service is running on 127.0.0.1 using the TCP port: 3031
    The SchedulingNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Scheduling notify service is running on 127.0.0.1 using the TCP port: 3033
    The NotifyEventChannelFactoryDV notify service is running on 127.0.0.1 using the TCP port: 3034
    The ControlRealtimeNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The ControlRealtime notify service is running on 127.0.0.1 using the TCP port: 3036
    The NotifyEventChannelFactoryCM notify service is running on 127.0.0.1 using the TCP port: 3037
    ------------------------------------------------------------------------        
    `;
  }

}