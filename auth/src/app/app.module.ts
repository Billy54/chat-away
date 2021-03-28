import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ErrorHandlerService } from './services/error-handler.service';
import { TopbarComponent } from './topbar/topbar.component';
import { RegisterComponent } from './register/register.component';
import { DataShareService } from './services/data-share.service';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { CommentComponent } from './comment/comment.component';
import { ChatDirective } from './chat-area/chat.directive';
import { ConversationDirective } from './home/conversation.directive';
import { SocketioService } from './services/socketio.service';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';
import { InputFieldComponent } from './input-field/input-field.component';
import { CommentsService } from './services/comments.service';
import { StatusComponent } from './status/status.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { FileService } from './services/file.service';
import { UsersComponent } from './users/users.component';
import { RoomInfoComponent } from './room-info/room-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    TopbarComponent,
    RegisterComponent,
    ChatAreaComponent,
    CommentComponent,
    ChatDirective,
    ConversationDirective,
    ChatRoomsComponent,
    InputFieldComponent,
    StatusComponent,
    InfoComponent,
    UsersComponent,
    RoomInfoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    CookieService,
    JwtHelperService,
    ErrorHandlerService,
    RegisterComponent,
    DataShareService,
    SocketioService,
    DataService,
    UsersService,
    CommentsService,
    FileService,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
