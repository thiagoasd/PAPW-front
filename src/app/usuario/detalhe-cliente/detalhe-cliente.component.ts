import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/models';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  constructor(private router: Router, private clienteService: ClienteService) { }
  cliente: Client;
  ngOnInit(): void {
    let clienteId = history.state.clienteId
    this.clienteService.getCliente(clienteId).subscribe((cliente: Client) => {
      this.cliente = cliente;
    })
  }

  voltar() {
    this.router.navigate(['user']);
  }
}
