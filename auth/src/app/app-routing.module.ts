import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'chat/:id',
        component: ChatAreaComponent,
        canActivate: [AuthGuardService],
        outlet: 'chatArea',
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
