import { IStatus } from './istatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AcsStatusService {
  readonly rootUrl = "http://rubyps:10021/acsclient";

  constructor(private http: HttpClient) {}

  fetchAcsStatus(): Promise<any> {
   // return this.http.jsonp(this.rootUrl + "/acs-status", 'callback').toPromise();
    return this.http.get(this.rootUrl + "/acs-status").toPromise();
   
  }

  fetchMockStatus(){
    return `
    Status for ACS instance: 0
    ------------------------------------------------------------------------
    2021-02-04T19:21:12.839 ERROR [acsstartupPids] Unable to determine manager's process ID.
    2021-02-04T19:21:12.909 ERROR [acsstartupPids] Unable to determine the naming service's process ID.
    2021-02-04T19:21:12.973 ERROR [acsstartupPids] Unable to determine the notification service's process ID.
    2021-02-04T19:21:13.048 ERROR [acsstartupPids] Unable to determine the logging service's process ID.
    2021-02-04T19:21:13.115 ERROR [acsstartupPids] Unable to determine the interface repository's process ID.
    2021-02-04T19:21:13.176 ERROR [acsstartupPids] Unable to determine logging's notify service process ID.
    2021-02-04T19:21:13.238 ERROR [acsstartupPids] Unable to determine archive notify service's process ID.
    2021-02-04T19:21:13.296 ERROR [acsstartupPids] Unable to determine alarm notify service's process ID.
    2021-02-04T19:21:13.348 ERROR [acsstartupPids] Unable to determine acsLogSvc's process ID.
    2021-02-04T19:21:13.399 ERROR [acsstartupPids] Unable to determine CDB's process ID.
    2021-02-04T19:21:13.447 ERROR [acsstartupPids] Unable to determine AlarmService's process ID.
    
    Emitting information about all known local and remote containers:
    The ARCHIVE/ACC/cppTotalPowerContainer container is running on 127.0.0.1 using the TCP port: 4000
    
    Emitting information about all known local and remote notify services:
    The AcaNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Aca notify service is running on 127.0.0.1 using the TCP port: 3021
    The CorrNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Corr notify service is running on 127.0.0.1 using the TCP port: 3023
    The ControlSystemNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The ControlSystem notify service is running on 127.0.0.1 using the TCP port: 3025
    The TelcalNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Telcal notify service is running on 127.0.0.1 using the TCP port: 3027
    The NotifyEventChannelFactoryPM notify service is not currently running but was at some point in time.
    The DcNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Dc notify service is running on 127.0.0.1 using the TCP port: 3030
    The NotifyEventChannelFactoryDA notify service is not currently running but was at some point in time.
    The SchedulingNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The Scheduling notify service is running on 127.0.0.1 using the TCP port: 3033
    The NotifyEventChannelFactoryDV notify service is not currently running but was at some point in time.
    The ControlRealtimeNotifyEventChannelFactory notify service is not currently running but was at some point in time.
    The ControlRealtime notify service is running on 127.0.0.1 using the TCP port: 3036
    The NotifyEventChannelFactoryCM notify service is not currently running but was at some point in time.
    ------------------------------------------------------------------------
    `;
  }

}