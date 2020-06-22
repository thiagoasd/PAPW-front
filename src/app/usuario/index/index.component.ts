import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Client } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Client[];
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {

    this.clienteService.getAllClientes().subscribe((clientes: Client[]) => {
      this.clientes = clientes;
    })
  }

  editar(id: number) {
    this.router.navigateByUrl('/editarCliente', { state: { clienteId: id } });
  }

  detalhe(id: number) {
    this.router.navigateByUrl('/detalheCliente', { state: { clienteId: id } });
  }

  excluir(id: number) {
    if (window.confirm('Gostaria mesmo de deletar esse cliente?')) {
      this.clienteService.excluirCliente(id).subscribe(() => {
        window.location.reload()
      })
    }

  }
}
