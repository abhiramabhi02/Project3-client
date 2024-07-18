import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent {
  message: string = '';
  messages: string[] = [];
  constructor(private chatService: ChatService) {}
  ngOnInit(): void {
    this.chatService.getMessage().subscribe((message: string) => {
      this.messages.push(message);
    });
  }
  sendMessage(): void {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
  ngOnDestroy(): void {
    this.chatService.disconnect();
  }
}
