import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Client } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {
  clienteForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    phone_number: new FormControl(''),
    zip_code: new FormControl(''),
    address_number: new FormControl('')
  })

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.clienteService.criarCliente(this.clienteForm.get('name').value, this.clienteForm.get('phone_number').value, this.clienteForm.get('zip_code').value, this.clienteForm.get('address_number').value).subscribe(
      (cliente: Client) => {
        alert("Cliente criado");
        this.router.navigate(['user']);
      }, (err) => {
        alert(err.error.message);
        
      }  
      })

    //console.log(this.usuarioService.name);
  }

  voltar(){
    this.router.navigate(['user']);
  }

}
