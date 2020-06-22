import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { IndexComponent } from './usuario/index/index.component';
import { CriarClienteComponent } from './usuario/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './usuario/editar-cliente/editar-cliente.component';
import { DetalheClienteComponent } from './usuario/detalhe-cliente/detalhe-cliente.component';
import { DetalheUsuarioComponent } from './usuario/detalhe-usuario/detalhe-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    IndexComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    DetalheClienteComponent,
    DetalheUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
