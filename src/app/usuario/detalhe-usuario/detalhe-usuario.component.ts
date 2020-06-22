import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private usuarioService: UsuarioService) { }
  usuario: User;
  ngOnInit(): void {
    this.usuarioService.meuPerfil().subscribe((usuario: User) => {
      this.usuario = usuario;
    })
  }

  voltar() {
    this.router.navigate(['user']);
  }

  editar() {
    this.router.navigate(['editarUsuario']);
  }

  excluir() {
    if (window.confirm('Gostaria mesmo de deletar sua conta?')) {
      this.usuarioService.excluirMeuPerfil().subscribe(() => {
        alert('Conta deletada')
        this.router.navigate([''])
      })
    }

  }

}
