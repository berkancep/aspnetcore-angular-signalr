import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/services/signalR.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: string = '';
  nick: string = '';

  constructor(public signalRService: SignalRService
  ) { }

  ngOnInit() {
    this.nick = window.prompt('Your name:', 'John');
    this.signalRService.createConnection();
    this.signalRService.startConnection();

    this.signalRService.registerServer();
  }

  sendMessage() {
    this.signalRService.sendMessage(this.nick,this.message);
  }

}
