import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormControl, NumberValueAccessor } from '@angular/forms';
import { Client } from 'src/app/models/models';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  clienteForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    phone_number: new FormControl(''),
    zip_code: new FormControl(''),
    address_number: new FormControl('')
  })

  clienteId: number;

  constructor(private clienteService: ClienteService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.clienteId = history.state.clienteId

    this.clienteService.getCliente(this.clienteId).subscribe((cliente: Client) => {
      this.clienteForm = new FormGroup({
        name: new FormControl(cliente.name),
        phone_number: new FormControl(cliente.phone_number),
        zip_code: new FormControl(cliente.zip_code),
        address_number: new FormControl(cliente.address_number)
      })
    })
  }

  submit() {
    this.clienteService.editarCliente(this.clienteForm.get('name').value, this.clienteForm.get('phone_number').value, this.clienteForm.get('zip_code').value, this.clienteForm.get('address_number').value, this.clienteId).subscribe(
      (cliente: Client) => {
        alert("Cliente editado");
        this.router.navigate(['user']);
      })

    //console.log(this.usuarioService.name);
  }

  voltar(){
    this.router.navigate(['user']);
  }

}
