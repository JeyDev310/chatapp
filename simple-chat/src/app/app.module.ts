import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbActionsModule, NbInputModule, NbButtonModule, NbCardModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { FirstComponent } from './page/first/first.component';
import { SecondComponent } from './page/second/second.component';

import { ChatService } from './shared/services/chat.service';

const config: SocketIoConfig = {
  url: 'http://localhost:3000', 
  options: {} 
};

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbActionsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbChatModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
