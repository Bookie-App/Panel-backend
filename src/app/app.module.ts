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
import { AddUserComponent } from './components/usuarios/add-user/add-user.component';
import { UserListComponent } from './components/usuarios/user-list/user-list.component';
import { EliminarUsuarioComponent } from './components/usuarios/eliminar-usuario/eliminar-usuario.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibrousuarioComponent } from './components/librousuario/librousuario.component';
import { AddlibroComponent } from './components/addlibro/addlibro.component';

const routes:Routes = [
  {path:'login', component: LoginComponent, title: 'login'},
  {path:'user', component:UserComponent, title:'user', canActivate: [tokenGuard]},
  {path:'admin',component:AdminComponent, title:'admin', canActivate: [tokenGuard]},
  {path:'usuarios', component:UserListComponent, title:'lista usuarios', canActivate: [tokenGuard]},
  {path:'add-user', component:AddUserComponent, title:'añadir usuario', canActivate:[tokenGuard]},
  {path: 'libros', component:LibrosComponent, title: 'libros', canActivate: [tokenGuard]},
  {path: 'libros-usuario', component:LibrousuarioComponent, title: 'libros usuario', canActivate: [tokenGuard]},
  {path:'add-libro',component:AddlibroComponent,title:'añadir libro',canActivate:[tokenGuard]},
  {path: '**', pathMatch: 'full', redirectTo : 'login'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    AddUserComponent,
    UserListComponent,
    EliminarUsuarioComponent,
    LibrosComponent,
    LibrousuarioComponent,
    AddlibroComponent
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
