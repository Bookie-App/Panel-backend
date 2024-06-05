import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';  
import { TokenInterceptor } from './interceptors/token.interceptor';
import { tokenGuard } from './guards/token.guard';

const routes:Routes = [
  {path:'login', component: LoginComponent, title: 'login'},
  {path:'user', component:UserComponent, title:'user', canActivate: [tokenGuard]},
  {path:'admin',component:AdminComponent, title:'admin', canActivate: [tokenGuard]},
  {path: '**', pathMatch: 'full', redirectTo : 'login'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
