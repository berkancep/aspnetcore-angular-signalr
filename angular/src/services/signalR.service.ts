import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor() { }

  private hubConnection: HubConnection;
  public messages: string[] = [];

  public createConnection() {
    this.hubConnection = new HubConnectionBuilder().withUrl('https://localhost:5001/chat').build();
  }

  public startConnection() {
    this.hubConnection.start().then(() => {
      console.log('Hub connection started.')
    }).catch(error => {
      console.log('Error while connection: ' + error)
    });
  }

  public registerServer() {
    this.hubConnection.on('messages', (nick: string, message: string) => {
      const text = `${nick}: ${message}`;
      this.messages.push(text);
    });
  }

  public sendMessage(nick: string, message: string) {
    this.hubConnection
      .invoke('messages', nick, message)
      .catch(err => console.error(err));
  }



}
