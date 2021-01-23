import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pong: boolean = false;
  constructor(private ipcService: IpcService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ping = (): void => {
    this.ipcService.send("message", "ping");
    this.ipcService.on("reply", (event: any, arg: string) => {
      this.pong = arg === "pong";
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.ipcService.removeAllListeners("reply");
  }

}
