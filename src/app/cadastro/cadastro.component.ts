import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl(''), //TODO VALIDACOES
    telefone: new FormControl(''),
    senha: new FormControl(''),
  })

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {

    this.usuarioService.cadastrar(this.cadastroForm.get('nome').value, this.cadastroForm.get('telefone').value, this.cadastroForm.get('senha').value).subscribe(
      (usuario: User) => {
        alert("Usuario cadastrado");
        this.router.navigate(['']);
      }, (err) => {
        alert(err.error.message);
        
      }  
      })

    console.log(this.cadastroForm);

  }

}
