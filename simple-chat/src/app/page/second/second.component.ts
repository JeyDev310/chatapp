import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ChatService } from "src/app/shared/services/chat.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  text = 'test message';
  messages: any[] = [];
  userName = "test";
  avatar = "";
  date = new Date();

  constructor(
    public chatService: ChatService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    if(!this.chatService.userName) {
      this.router.navigate(['/home']);
    }

    this.userName = this.chatService.userName;
    this.chatService.getMessages().subscribe(res => {
      this.messages.push({
        text: res[1],
        date: new Date(),
        reply: false,
        user: {
          name: res[0],
          avatar: 'https://i.gifer.com/no.gif',
        },
      })
    });
  }

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'Me',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });

    this.chatService.onSend(event.message);
  }
}
