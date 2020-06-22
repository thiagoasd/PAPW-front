import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { IndexComponent } from './usuario/index/index.component';
import { AuthService } from './services/auth.service';
import { CriarClienteComponent } from './usuario/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './usuario/editar-cliente/editar-cliente.component';
import { DetalheClienteComponent } from './usuario/detalhe-cliente/detalhe-cliente.component';
import { DetalheUsuarioComponent } from './usuario/detalhe-usuario/detalhe-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'user', component: IndexComponent, canActivate: [AuthService]},
  {path: 'detalheUsuario', component: DetalheUsuarioComponent, canActivate: [AuthService]},
  {path: 'editarUsuario', component: EditarUsuarioComponent, canActivate: [AuthService]},
  {path: 'criarCliente', component: CriarClienteComponent, canActivate: [AuthService]},
  {path: 'editarCliente', component: EditarClienteComponent, canActivate: [AuthService]},
  {path: 'detalheCliente', component: DetalheClienteComponent, canActivate: [AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
