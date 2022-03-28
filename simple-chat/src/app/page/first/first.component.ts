import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ChatService } from "src/app/shared/services/chat.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  userName: string = '';

  constructor(
    public router: Router,
    public chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.chatService.getHello().subscribe(res => {
      if (res === 'false') {
        this.router.navigate(['/chat']);
      } else {
        alert("Nickname exists.");
      }
    })
  }

  onOk() {
    if (!this.userName) return;
    this.chatService.sendHello(this.userName);
  }
}
