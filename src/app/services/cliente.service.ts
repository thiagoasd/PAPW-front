import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Client } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = "http://localhost:3333/clients";

  constructor(private httpClient: HttpClient, private authService: AuthService) {

  }

  getAllClientes() {
    return this.httpClient.get(this.url, { headers: this.getHeaders() });
  }

  getCliente(clienteId: number) {
    return this.httpClient.get(this.url + "/" + clienteId, { headers: this.getHeaders() });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().append("Authorization", "Bearer " + this.authService.getToken());
  }

  criarCliente(name: string, phone_number: string, zip_code: string, address_number: string) {

    let cliente = {
      address_number: address_number,
      name: name,
      zip_code: zip_code,
      phone_number: phone_number,
    }
    return this.httpClient.post(this.url, cliente, { headers: this.getHeaders() });
  }

  editarCliente(name: string, phone_number: string, zip_code: string, address_number: string, clienteId: number) {

    let cliente = {
      address_number: address_number,
      name: name,
      zip_code: zip_code,
      phone_number: phone_number,
      id: clienteId
    }

    return this.httpClient.put(this.url + "/" + clienteId, cliente, { headers: this.getHeaders() });
  }

  excluirCliente(clienteId: number) {
    let tmp = { id: clienteId.toString() }

    const options = {
      headers: this.getHeaders(),
      body: tmp
    }

    return this.httpClient.delete(this.url + "/" + clienteId, options);
  }


}

