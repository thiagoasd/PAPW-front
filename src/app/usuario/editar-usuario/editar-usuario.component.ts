import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    phone_number: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {

    this.usuarioService.meuPerfil().subscribe((usuario: User) => {
      this.usuarioForm = new FormGroup({
        name: new FormControl(usuario.name),
        phone_number: new FormControl(usuario.phone_number),
        password: new FormControl('')
      })
    })
  }

  submit() {
    this.usuarioService.EditarMeuPerfil(this.usuarioForm.get('name').value, this.usuarioForm.get('phone_number').value, this.usuarioForm.get('password').value).subscribe(
      () => {
        alert("Usuario editado");
        this.router.navigate(['user']);
      })
  }

  voltar() {
    this.router.navigate(['user']);
  }


}
